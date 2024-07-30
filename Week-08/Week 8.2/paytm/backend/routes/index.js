const express = require("express");
const userRouter = require("./routes/user");

const router = express.Router();

module.exports = router;
app.use("/api/v1/user", userRouter);
