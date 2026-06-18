import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Signup = () => {
  return (
    <div className="w-full min-h-screen flex">

      {/* ================= LEFT SIDE ================= */}
      <div className="hidden md:flex w-1/2 relative">
        <img
          src="https://yoursuittrend.com/wp-content/uploads/turtle-neck-with-suit-12.jpg"
          className="w-full h-full object-cover"
          alt="luxury"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-10">
          <h1 className="font-serif text-5xl text-white tracking-[0.3em]">
            ROYAL CREST
          </h1>
          <p className="mt-6 text-white/70 max-w-md text-sm">
            Join the private circle of timeless elegance.
          </p>
        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#F6F1E8] px-6">

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >

          {/* TITLE */}

           <h1 className=" text-red-800 ">*We Suggest You Not To Create Account  Since The function is not in working phase </h1>

          <h2 className="font-serif text-4xl text-[#0B1B2B] text-center">
            Create Account
          </h2>

          <p className="text-center text-gray-600 mt-3 text-sm">
            Join Royal Crest today
          </p>

          {/* FORM */}
          <form className="mt-10 flex flex-col gap-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-transparent border border-gray-300 focus:border-[#C8A24A] outline-none text-sm"
            />

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
              SIGN UP
            </button>

          </form>

          {/* SWITCH TO LOGIN */}
          <div className="mt-8 text-center">
            <Link
              to="/login"
              className="text-sm text-gray-600 hover:text-[#C8A24A] transition"
            >
              Already have an account? Login →
            </Link>
          </div>

        </motion.div>

      </div>
    </div>
  );
};

export default Signup;