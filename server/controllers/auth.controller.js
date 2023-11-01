const User = require("../models/user.model.js");
const bcryptjs = require("bcryptjs");
const errorHandler = require("../utility/errorHandler.js");
const jwt=require("jsonwebtoken");

async function signup  (req, res, next)  {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const user = new User({ username, email, password: hashedPassword });

  //here 10 is salt number which is default
  try {
    await user.save();
    res.status(200).send({ success: true, message: "User Saved successfully" });
  } catch (error) {
    next(error);
  }
};
 async function signin  (req, res, next)  {
  const { email, password } = req.body;
   
  try {
    let validUser =await User.findOne({ email });

    if (!validUser) {
      return next( errorHandler(200, "User not found"));
    }
    console.log(validUser)
     let validPassword=bcryptjs.compareSync(password,validUser?.password);

    if(!validPassword)
    {
      return next( errorHandler(200, "Password not correct"));
    }
    console.log("dddddddd");
    const token=jwt.sign({id:validUser._id},"sdf5s41w1vf41vb7b551s5e1f8ed2v1d5v1")
    res.cookie("authentication_token",token,{httpOnly:true})?.status(200)?.json(validUser);
  } catch (error) {
    next(error);
  }
};


module.exports={signin,signup};
