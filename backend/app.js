import express from "express";
import mongoose from "mongoose";

const app = express();
app.use("/", (req, res, next) => {
  res.send("Hello hai bhai ko");
});

mongoose
  .connect(
    "mongodb+srv://mohitchauhan4u:9306138730@blogwebsitemern.wlhbo.mongodb.net/test"
  )
  .then(() => app.listen(5000))
  .then(() => console.log("Connected To Database"))
  .catch((error) => console.log("ERROR", console.error));
