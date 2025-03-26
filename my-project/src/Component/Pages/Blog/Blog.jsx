import React from "react";
import BlogBg from "./BlogBg";
import BlogAd from "./BlogAd";
import BlogDetail from "./BlogDetail";

const Blog = () => {
  return (
    <>
      <div>
        <BlogBg />
      </div>
      <div>
        <BlogDetail />
      </div>
      <div>
        <BlogAd />
      </div>
    </>
  );
};

export default Blog;
