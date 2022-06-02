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

export const addBlog = async (req, res, next) => {
  const { title, description, image, user } = req.body;
  const blog = new Blog({
    title,
    description,
    image,
    user,
  });
  try {
    await blog.save();
  } catch (error) {
    return console.error("ERROR", error);
  }
  return res.status(200).json({ blog });
};

export const updateBlog = async (req, res, next) => {
  const { title, description } = req.body;
  const blogId = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndUpdate(blogId, {
      title,
      description,
    });
  } catch (error) {
    console.error("ERROR", error);
  }
  if (!blog) {
    return res.status(500).json({ mesage: "Unable to update blog" });
  }
  return res.status(200).json({ blog });
};
