const express = require("express");
const mongoose = require("mongoose");
const userRouter =  require("./routes/user.route");
const authRouter =  require("./routes/auth.route");
const app = express();
const cors=require("cors")

mongoose.connect("mongodb+srv://Ashutosh:Ashutosh@real-estate.bbzpmu5.mongodb.net/real-estate?retryWrites=true&w=majority").then(() => {
  console.log("Mongoose connected");
});
app.use(cors());
app.listen(8000, () => {
  console.log("port running on");
});
app.use(express.json())

app.use("/api/v1",userRouter);
app.use("/api/v1",authRouter);

app.use((error,req,res,next)=>{
  const statusCode=error.statusCode || 500;
  const message=error?.message || "internal server error";
  return res.status(statusCode).send({success:false,statusCode,message})
})