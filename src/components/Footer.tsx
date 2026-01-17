import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="w-full px-6 py-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
         
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">
              BlogApp
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              A modern platform for sharing ideas, stories, and knowledge.
              Write, read, and connect with a community of passionate writers.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="mailto:hello@blogapp.com"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

         
          <div className="md:col-span-1 md:col-start-3">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a className="footer-link" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  All Blogs
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          
          <div className="md:col-span-1 md:col-start-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <a className="footer-link" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

      
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} BlogApp. All rights reserved. Built with React &
            TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
};
