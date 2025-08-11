import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-green-200 via-white to-green-100 text-center">
      {/* 404 Text Animation */}
      <h1 className="text-9xl font-extrabold text-green-800 animate-bounce drop-shadow-lg">
        404
      </h1>

      {/* Message */}
      <p className="text-2xl mt-4 text-gray-700 animate-pulse">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      {/* Extra Description */}
      <p className="text-gray-500 mt-2">
        It might have been moved or deleted.
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-green-700 text-white font-semibold rounded-xl shadow-lg hover:bg-green-800 hover:scale-105 transform transition duration-300"
      >
        Go Back Home
      </Link>

      {/* Floating shapes for animation */}
      <div className="absolute top-10 left-10 w-12 h-12 bg-green-300 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-green-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-10 left-1/3 w-10 h-10 bg-green-200 rounded-full animate-spin-slow"></div>
    </div>
  );
};

export default PageNotFound;
