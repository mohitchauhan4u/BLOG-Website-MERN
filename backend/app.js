import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";

const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose
  .connect(
    "mongodb+srv://mohitchauhan4u:9306138730@blogwebsitemern.wlhbo.mongodb.net/blog-website-mern"
  )
  .then(() => app.listen(5000))
  .then(() => console.log("Connected To Database"))
  .catch((error) => console.log("ERROR", console.error));
