import express from "express";
import {
  addBlog,
  deleteBlog,
  getAllBlogs,
  getById,
  updateBlog,
} from "../controllers/blog-controller";
const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.delete("/delete/:id", deleteBlog);
blogRouter.get("/:id", getById);

export default blogRouter;
