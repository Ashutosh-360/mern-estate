const User = require("../models/user.model.js");

module.exports = signup = async (req, res) => {
  const { username, email, password } = req.body;

  const user = new User({ username, email, password });
  
  try {
      await user.save();
      res.status(200).send({ success: true, message: "User Saved successfully" });
    } catch (error) {
        res.status(500).send({ success: false, message: error?.message });
    }
};
