import Blog from "../model/Blog";

export const getAllBlogs = async (req, res, next) => {
  let blogs;
  try {
    blogs = await Blog.find();
  } catch (error) {
    return console.error("ERROR", error);
  }
  if (!blogs) {
    return res.status(404).json({ message: "No blogs found" });
  }
  return res.status(200).json({ blogs });
};
