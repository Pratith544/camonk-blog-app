import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { blogsApi } from "../api/blogs";
import { queryClient } from "../lib/queryClient";

interface CreateBlogFormProps {
  onSuccess: () => void;
}

export const CreateBlogForm: React.FC<CreateBlogFormProps> = ({
  onSuccess,
}) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [content, setContent] = useState("");

  const createMutation = useMutation({
    mutationFn: blogsApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      setTitle("");
      setCategory("");
      setDescription("");
      setCoverImage("");
      setContent("");
      onSuccess();
    },
  });

  const handleSubmit = () => {
    const categoryArray = category
      .split(",")
      .map((c) => c.trim())
      .filter(Boolean);

    createMutation.mutate({
      title,
      category: categoryArray,
      description,
      date: new Date().toISOString().split("T")[0],
      coverImage,
      content,
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Enter blog title"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Categories (comma-separated)
        </label>
        <Input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          placeholder="Tech, Programming, Web"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="Short description"
          rows={2}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Cover Image URL
        </label>
        <Input
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          required
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Content</label>
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          placeholder="Blog content (plain text)"
          rows={6}
        />
      </div>

      {createMutation.isError && (
        <Alert variant="destructive">
          <AlertDescription>
            {createMutation.error instanceof Error
              ? createMutation.error.message
              : "Failed to create blog"}
          </AlertDescription>
        </Alert>
      )}

      <Button
        onClick={handleSubmit}
        disabled={createMutation.isPending}
        className="w-full"
      >
        {createMutation.isPending ? "Creating..." : "Create Blog"}
      </Button>
    </div>
  );
};
