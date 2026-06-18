import React from "react";
import { motion } from "framer-motion";

const Section = ({
  label,
  title,
  desc,
  children,
  dark,
  exploreText,
  exploreLink,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`py-40 px-6 text-center ${
        dark ? "bg-[#0B1B2B] text-white" : "bg-[#F6F1E8]"
      }`}
    >
      {/* LABEL */}
      {label && (
        <p
          className={`tracking-[0.4em] text-xs mb-6 ${
            dark ? "text-white/60" : "text-gray-500"
          }`}
        >
          {label}
        </p>
      )}

      {/* TITLE */}
      {title && (
        <h2 className="font-serif text-5xl md:text-6xl leading-tight">
          {title}
        </h2>
      )}

      {/* DESCRIPTION */}
      {desc && (
        <p
          className={`mt-6 max-w-2xl mx-auto text-lg ${
            dark ? "text-white/60" : "text-gray-600"
          }`}
        >
          {desc}
        </p>
      )}

      {/* CONTENT */}
      <div className="mt-16">{children}</div>

      {/* EXPLORE BUTTON (FIXED VISIBILITY) */}
      {exploreText && (
        <div className="mt-14">
          <a
            href={exploreLink || "#"}
            className="
              inline-block 
              px-8 py-3 
              border border-[#C8A24A] 
              text-[#C8A24A] 
              text-sm 
              tracking-[0.25em] 
              transition-all duration-300 
              hover:bg-[#C8A24A] 
              hover:text-black
            "
          >
            {exploreText} →
          </a>
        </div>
      )}
    </motion.section>
  );
};

export default Section;