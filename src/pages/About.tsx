import React from "react";

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        About Us
      </h1>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Welcome to BlogApp, your platform for sharing ideas, stories, and
          knowledge with the world.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We believe everyone has a story worth telling. BlogApp was created to
          provide a simple, elegant platform where writers, thinkers, and
          creators can share their perspectives with a global audience.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
          What We Offer
        </h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
          <li>Easy-to-use blog creation and management</li>
          <li>Clean, distraction-free reading experience</li>
          <li>Category-based organization</li>
          <li>Dark mode for comfortable reading</li>
          <li>Responsive design for all devices</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
          Get Started
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Ready to share your voice? Click the "Create Blog" button to start
          writing your first post. Whether you're sharing tech insights,
          creative stories, or personal experiences, we're here to help you
          reach your audience.
        </p>

        <div className="mt-8 p-6 bg-blue-50 dark:bg-gray-800 rounded-lg border border-blue-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Contact Us
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Have questions or feedback? We'd love to hear from you at{" "}
            <a
              href="mailto:hello@blogapp.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              hello@blogapp.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
