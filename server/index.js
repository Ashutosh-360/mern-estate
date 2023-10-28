const express = require("express");
const mongoose = require("mongoose");
const userRouter =  require("./routes/user.route");
const authRouter =  require("./routes/auth.route");
const app = express();

mongoose.connect("mongodb+srv://Ashutosh:Ashutosh@real-estate.bbzpmu5.mongodb.net/real-estate?retryWrites=true&w=majority").then(() => {
  console.log("Mongoose connected");
});
app.listen(8000, () => {
  console.log("port running on");
});

app.use(express.json())
app.use("/api/v1",userRouter);
app.use("/api/v1",authRouter);
