import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Blogs from "./components/Blogs";
import UserBlog from "./components/UserBlog";
import BlogDetails from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";
import Header from "./components/Header";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/add" element={<AddBlog />} />
          <Route path="/myBlogs" element={<UserBlog />} />
          <Route path="/myBlogs/:id" element={<BlogDetails />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
