"use client";

import { useParams } from "next/navigation";
import { Blog } from "../blogs";

const BlogContent = ({ blog }: { blog: Blog }) => {
  const params = useParams();
  return (
    <div className="prune">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <code>{JSON.stringify(params)}</code>
    </div>
  );
};

export default BlogContent;
