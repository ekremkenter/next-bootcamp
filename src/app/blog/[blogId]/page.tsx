import { notFound } from "next/navigation";
import { blogService } from "../blogs";
import BlogContent from "./BlogContent";

interface Params {
  blogId: string;
}

export async function generateMetadata({
  params: { blogId },
}: {
  params: Params;
}) {
  const blog = await blogService.getBlog(Number.parseInt(blogId));
  const metadata = {
    title: blog?.title ?? "Blog not found",
    description: blog?.content ?? "Blog not found",
  };

  return metadata;
}

export default async function BlogPage({
  params: { blogId },
}: {
  params: Params;
}) {
  const blog = await blogService.getBlog(Number.parseInt(blogId));
  if (!blog) {
    return notFound();
  }

  return <BlogContent blog={blog} />;
}
