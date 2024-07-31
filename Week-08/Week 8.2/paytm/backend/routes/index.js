const express = require("express");
const userRouter = require("./user");

const app = express();

const router = express.Router();

module.exports = router;
app.use("/user", userRouter);
