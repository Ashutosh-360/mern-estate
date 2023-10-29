const User = require("../models/user.model.js");
const bcryptjs=require("bcryptjs");

module.exports = signup = async (req, res,next) => {
  const { username, email, password } = req.body;

  const hashedPassword=bcryptjs.hashSync(password,10);
  const user = new User({ username, email, password:hashedPassword });

  //here 10 is salt number which is default
  try {
      await user.save();
      res.status(200).send({ success: true, message: "User Saved successfully" });
    } catch (error) {
        next(error);
    }
};