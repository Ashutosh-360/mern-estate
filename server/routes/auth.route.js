const express = require("express");
// const signup = require("../controllers/auth.controller");
const moduleObj = require("../controllers/auth.controller");

const authRouter = express.Router();

authRouter.post("/signup", moduleObj?.signup);
authRouter.post("/signin", moduleObj.signin);
authRouter.post("/google", moduleObj.google);
module.exports = authRouter;
