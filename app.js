const express = require("express");
const cors = require("cors");

const userRouter = require("./controllers/userController");
const loginRouter = require("./controllers/loginController");

const { errorHandler } = require("./utils/middlewares");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("build"));

app.use("/users", userRouter);
app.use("/login", loginRouter);

app.use(errorHandler);

module.exports = app;
