import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Collection = () => {
  const categories = [
    {
      name: "Suits",
      desc: "Tailored precision for modern gentlemen",
      image:
        "https://yoursuittrend.com/wp-content/uploads/turtle-neck-with-suit-12.jpg",
      key: "suits",
    },
    {
      name: "Old Money",
      desc: "Quiet luxury essentials",
      image:
        "https://yoursuittrend.com/wp-content/uploads/turtle-neck-with-suit-12.jpg",
      key: "old-money",
    },
    {
      name: "Shoes",
      desc: "Crafted leather perfection",
      image:
        "https://yoursuittrend.com/wp-content/uploads/turtle-neck-with-suit-12.jpg",
      key: "shoes",
    },
    {
      name: "Watches",
      desc: "Mechanical heritage timepieces",
      image:
        "https://yoursuittrend.com/wp-content/uploads/turtle-neck-with-suit-12.jpg",
      key: "watches",
    },
    {
      name: "Perfumes",
      desc: "Signature identity in scent",
      image:
        "https://yoursuittrend.com/wp-content/uploads/turtle-neck-with-suit-12.jpg",
      key: "perfumes",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F6F1E8]">

      {/* ================= HERO ================= */}
      <div className="h-[60vh] flex flex-col items-center justify-center text-center bg-[#0B1B2B] text-white px-6">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-5xl md:text-7xl tracking-[0.3em]"
        >
          COLLECTION
        </motion.h1>

        <p className="mt-6 text-white/60 max-w-xl text-sm md:text-base tracking-wide">
          Explore curated categories crafted with timeless elegance and modern refinement.
        </p>

      </div>

      {/* ================= FULL LUXURY SECTIONS ================= */}
      <div>

        {categories.map((item, index) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className={`relative w-full h-[80vh] flex items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >

            {/* IMAGE */}
            <img
              src={item.image}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* CONTENT */}
            <div
              className={`relative z-10 max-w-xl px-10 text-white ${
                index % 2 === 0 ? "text-left" : "text-right"
              }`}
            >

              <h2 className="font-serif text-5xl md:text-6xl tracking-wide">
                {item.name}
              </h2>

              <p className="mt-4 text-white/70 text-sm md:text-base">
                {item.desc}
              </p>

              <Link
                to={`/products?category=${item.key}`}
                className="inline-block mt-8 px-8 py-3 border border-white text-white text-sm tracking-[0.25em] hover:bg-white hover:text-black transition"
              >
                Explore →
              </Link>

            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
};

export default Collection;