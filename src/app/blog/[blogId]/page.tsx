import { notFound, redirect } from "next/navigation";

export default async function BlogPage({
  params: { blogId },
}: {
  params: { blogId: string };
  }) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  if (blogId === "a") {
    return notFound();
  }

  return <h1>Hello blog {blogId}!</h1>;
}
