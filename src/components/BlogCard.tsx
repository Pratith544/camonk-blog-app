import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Blog } from "../api/blogs";

interface BlogCardProps {
  blog: Blog;
  isSelected: boolean;
  onClick: () => void;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const BlogCard: React.FC<BlogCardProps> = ({
  blog,
  isSelected,
  onClick,
}) => {
  return (
    <Card
      className={`cursor-pointer transition-all hover:shadow-lg bg-white dark:bg-gray-800 ${
        isSelected ? "ring-2 ring-blue-500 dark:ring-blue-400" : ""
      }`}
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between mb-2">
          <div className="flex flex-wrap gap-1">
            {blog.category.map((cat) => (
              <Badge
                key={cat}
                className="text-xs bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white border-none"
              >
                {cat.toUpperCase()} 
              </Badge>
            ))}
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {formatDate(blog.date)}
          </span>
        </div>
        <h3 className="text-base font-semibold text-blue-600 dark:text-blue-400 line-clamp-2">
          {blog.title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
          {blog.description}
        </p>
      </CardContent>
    </Card>
  );
};
