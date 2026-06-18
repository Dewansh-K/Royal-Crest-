import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="w-full min-h-screen flex">

      {/* ================= LEFT SIDE ================= */}
      <div className="hidden md:flex w-1/2 relative">
        <img
          src="https://yoursuittrend.com/wp-content/uploads/turtle-neck-with-suit-12.jpg"
          alt="luxury"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-10">
          <h1 className="font-serif text-5xl text-white tracking-[0.3em]">
            ROYAL CREST
          </h1>
          <p className="mt-6 text-white/70 max-w-md text-sm tracking-wide">
            Timeless elegance crafted for modern refinement.
          </p>
        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#F6F1E8] px-6">

        {/* ANIMATED CONTAINER */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >

          {/* TITLE */}

          <h1 className=" text-red-800 ">*We Suggest You Not To Login Since The function is not in working phase </h1>
          <h2 className="font-serif text-4xl text-[#0B1B2B] text-center">
            Welcome Back
          </h2>

          <p className="text-center text-gray-600 mt-3 text-sm">
            Sign in to continue your experience
          </p>

          {/* FORM */}
          <form className="mt-10 flex flex-col gap-5">

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-transparent border border-gray-300 focus:border-[#C8A24A] outline-none text-sm"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 bg-transparent border border-gray-300 focus:border-[#C8A24A] outline-none text-sm"
            />

            <button
              type="submit"
              className="w-full bg-[#0B1B2B] text-white py-3 tracking-[0.2em] text-sm hover:bg-[#C8A24A] hover:text-black transition"
            >
              LOGIN
            </button>

          </form>

          {/* LINKS */}
          <div className="flex justify-between mt-6 text-sm text-gray-600">
            <Link to="/signup" className="hover:text-[#C8A24A] transition">
              Create Account
            </Link>

            <Link to="/forgot-password" className="hover:text-[#C8A24A] transition">
              Forgot Password?
            </Link>
          </div>

          {/* SIGNUP BUTTON */}
          <div className="mt-8 text-center">
            <Link
              to="/signup"
              className="inline-block px-8 py-3 border border-[#C8A24A] text-[#C8A24A] text-sm tracking-[0.25em] hover:bg-[#C8A24A] hover:text-black transition"
            >
              SIGN UP →
            </Link>
          </div>

        </motion.div>

      </div>
    </div>
  );
};

export default Login;