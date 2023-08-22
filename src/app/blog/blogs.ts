export interface Blog {
  id: number;
  title: string;
  content: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Hello World",
    content: "This is my first blog post",
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is my second blog post",
  },
];

class BlogService {
  async getBlogs(): Promise<Blog[]> {
    console.log("getBlogs");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return blogs;
  }

  async getBlog(id: number): Promise<Blog | undefined> {
    console.log("getBlog", { id });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return blogs.find((blog) => blog.id === id);
  }
}

export const blogService = new BlogService();
