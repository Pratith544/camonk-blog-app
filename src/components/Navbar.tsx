import React from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

interface NavbarProps {
  onCreateClick: () => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
  onBlogsClick: () => void;
  onAboutClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onCreateClick,
  isDarkMode,
  onThemeToggle,
  onBlogsClick,
  onAboutClick,
}) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-900 shadow-sm border-gray-200 dark:border-gray-700">
      <div className="flex h-16 items-center justify-between px-6">
        
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            BlogApp
          </h1>
        </div>

        
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-6">
          <button
            onClick={onBlogsClick}
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Blogs
          </button>
          <button
            onClick={onAboutClick}
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            About Us
          </button>
        </div>

      
        <div className="flex items-center space-x-4">
         
          <Button
            variant="outline"
            size="icon"
            onClick={onThemeToggle}
            className="rounded-full border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isDarkMode ? (
              <Moon className="h-5 w-5 text-gray-900 dark:text-gray-100" />
            ) : (
              <Sun className="h-5 w-5 text-gray-900 dark:text-gray-100" />
            )}
          </Button>

        
          <Button
            onClick={onCreateClick}
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 hidden md:flex"
          >
            + Create Blog
          </Button>
        </div>
      </div>
    </nav>
  );
};
