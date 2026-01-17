export type Blog = {
  id: number;
  title: string;
  category: string[];
  description: string;
  date: string;
  coverImage: string;
  content: string;
};

export type CreateBlogInput = Omit<Blog, "id">;

const API_BASE = "http://localhost:3001";

export const blogsApi = {
  getAll: async (): Promise<Blog[]> => {
    const res = await fetch(`${API_BASE}/blogs`);
    if (!res.ok) throw new Error("Failed to fetch blogs");
    return res.json();
  },

  getById: async (id: number): Promise<Blog> => {
    const res = await fetch(`${API_BASE}/blogs/${id}`);
    if (!res.ok) throw new Error("Failed to fetch blog");
    return res.json();
  },

  create: async (blog: CreateBlogInput): Promise<Blog> => {
    const res = await fetch(`${API_BASE}/blogs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    });
    if (!res.ok) throw new Error("Failed to create blog");
    return res.json();
  },
};
