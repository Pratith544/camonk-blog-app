import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BlogList } from "@/components/BlogList";
import { BlogDetails } from "@/components/BlogDetails";
import { CreateBlogForm } from "@/components/CreateBlogForm";
import { Navbar } from "@/components/Navbar";
import { About } from "./About";
import { Footer } from "@/components/Footer";


const getInitialTheme = (): boolean => {
  if (typeof window === "undefined") return false;

  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return savedTheme === "dark" || (!savedTheme && prefersDark);
};

export const Home: React.FC = () => {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const handleCreateClick = () => {
    setShowCreateForm(true);
    setShowAbout(false);
  };

  const handleBlogsClick = () => {
    setShowCreateForm(false);
    setShowAbout(false);
  };

  const handleAboutClick = () => {
    setShowAbout(true);
    setShowCreateForm(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
     
      <Navbar
        onCreateClick={handleCreateClick}
        onBlogsClick={handleBlogsClick}
        onAboutClick={handleAboutClick}
        isDarkMode={isDarkMode}
        onThemeToggle={handleThemeToggle}
      />

      
      {showAbout ? (
       
        <>
          <div className="flex-1 overflow-y-auto">
            <About />
          </div>
          <Footer />
        </>
      ) : (
        <>
          <div className="flex flex-1 overflow-hidden">
            <div className="w-full md:w-[30%] border-r border-gray-200 dark:border-gray-700 flex flex-col bg-gray-50 dark:bg-gray-900">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Blog Articles
                </h2>
                <Button
                  onClick={() => setShowCreateForm(!showCreateForm)}
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  {showCreateForm ? "View Blogs" : "+ Create New Blog"}
                </Button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                {showCreateForm ? (
                  <CreateBlogForm onSuccess={() => setShowCreateForm(false)} />
                ) : (
                  <BlogList
                    selectedBlogId={selectedBlogId}
                    onSelectBlog={setSelectedBlogId}
                  />
                )}
              </div>
            </div>

            <div className="hidden md:block md:w-[70%] overflow-y-auto bg-white dark:bg-gray-800">
              {selectedBlogId ? (
                <div className="p-12">
                  <BlogDetails blogId={selectedBlogId} />
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <p className="text-gray-400 dark:text-gray-500 text-xl mb-2">
                      Select a blog to view details
                    </p>
                    <p className="text-gray-300 dark:text-gray-600 text-sm">
                      Click on any blog card from the left panel
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

         
          <Footer />
        </>
      )}
    </div>
  );
};
