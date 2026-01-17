import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { blogsApi } from "../api/blogs";

interface BlogDetailsProps {
  blogId: number;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const BlogDetails: React.FC<BlogDetailsProps> = ({ blogId }) => {
  const {
    data: blog,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => blogsApi.getById(blogId),
    enabled: !!blogId,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500 dark:text-gray-400">
          Loading blog details...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <Alert variant="destructive">
        <AlertDescription>
          Error loading blog:{" "}
          {error instanceof Error ? error.message : "Unknown error"}
        </AlertDescription>
      </Alert>
    );
  }

  if (!blog) return null;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
    
      <div className="w-full h-80 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

     
      <div className="flex items-center gap-4 text-sm">
        <div className="flex flex-wrap gap-2">
          {blog.category.map((cat) => (
            <Badge
              key={cat}
              variant="default"
              className="bg-blue-600 dark:bg-blue-500 text-white"
            >
              {cat}
            </Badge>
          ))}
        </div>
        <span className="text-gray-400 dark:text-gray-500">|</span>
        <span className="text-gray-500 dark:text-gray-400">
          {formatDate(blog.date)}
        </span>
      </div>

      
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        {blog.title}
      </h1>

     
      <p className="text-lg text-gray-700 dark:text-gray-300">
        {blog.description}
      </p>

      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap leading-relaxed">
          {blog.content}
        </div>
      </div>

      
      <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {blog.category.map((cat) => (
            <Badge
              key={cat}
              variant="outline"
              className="text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400"
            >
              {cat}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
