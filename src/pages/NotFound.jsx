import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="min-h-[100vh] w-[100vw] flex flex-col justify-center items-center px-6 text-center bg-indigo-950 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          404 - Page Not Found
        </h2>
        <p className="text-base md:text-lg text-blue-300 max-w-xl">
          Ahhh!!! I think you are lost. The page you are looking for does not
          exist. Please check the URL or go back to the homepage.
        </p>
        <button className="mt-6 bg-[#C8A24A] px-6 py-3 text-black font-medium">
          <a href="/" className="hover:text-white transition">
            Go Back Home
          </a>
        </button>
      </div>
    </>
  );
};

export default NotFound;
