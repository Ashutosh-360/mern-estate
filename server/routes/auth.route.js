const express = require("express");
// const signup = require("../controllers/auth.controller");
const moduleObj = require("../controllers/auth.controller");

const authRouter = express.Router();

authRouter.post("/signup", moduleObj?.signup);
authRouter.post("/signin", moduleObj.signin);
module.exports = authRouter;