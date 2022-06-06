import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:5000/api/blog")
      .catch((error) => console.error("ERROR", error));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blogs));
  }, []);
  console.log("BLOGS", blogs);
  return (
    <div>
      {blogs &&
        blogs.map((blog, key) => (
          <Blog
            key={key}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            user={blog.user.name}
          />
        ))}
    </div>
  );
};

export default Blogs;
