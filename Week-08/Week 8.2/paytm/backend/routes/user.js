const express = require("express");
const zod = require("zod");
const { User, Account } = require("../db");
const router = express.Router();
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");

// Define Zod schemas
const signupSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});

const signinBody = zod.object({
  username: zod.string(),
  password: zod.string(),
});

const updateBody = zod.object({
  password: zod.string().optional(), // Adjusted to make fields optional
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

// Routes
router.post("/", async (req, res) => {
  const { success, data, error } = updateBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Invalid input",
      error: error.errors,
    });
  }
  await User.updateOne({ _id: req.userId }, req.body);

  res.json({
    message: "Updated Successfully",
  });
});

router.post("/signup", async (req, res) => {
  const { success } = signupSchema.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken/Incorrect inputs",
    });
  }

  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
  const userId = user._id;

  /// ----- Create new account ------

  await Account.create({
    userId,
    balance: 1 + Math.random() * 10000,
  });

  /// -----  ------

  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET,
  );

  res.json({
    message: "User created successfully",
    token: token,
  });
});

router.post("/signin", async (req, res) => {
  const { success, data, error } = signinBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Invalid input",
      error: error.errors,
    });
  }

  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET,
    );

    res.json({
      token: token,
    });
    return;
  }

  res.status(411).json({
    message: "Error while logging in",
  });
});

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  try {
    const regex = new RegExp(filter, "i");
    const users = await User.find(
      {
        $or: [{ firstName: regex }, { lastName: regex }],
      },
      "username firstName lastName _id",
    ); // Projection

    res.json({
      user: users,
    });
  } catch (error) {
    // Handle errors and provide feedback
    res.status(500).json({ error: "An error occurred while fetching users" });
  }
});

// Export the router
module.exports = router;
