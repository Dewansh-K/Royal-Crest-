import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { count } = useCart();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Collection", path: "/collection" },
  ];

  return (
    <div className="navbar hidden md:flex fixed top-4 left-0 right-0 mx-auto z-50 w-[92%] h-16 items-center justify-between px-8 md:px-12 backdrop-blur-md rounded-2xl bg-white/10">

      {/* ================= LEFT: LOGO ================= */}
      <Link
        to="/"
        className="company-logo text-xl font-semibold tracking-wide hover:text-[#C8A24A] transition"
      >
        Royal Crest
      </Link>

      {/* ================= CENTER: NAV LINKS ================= */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-10 text-sm font-medium tracking-wide">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="hover:text-[#C8A24A] transition"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* ================= RIGHT: ICONS ================= */}
      <div className="flex items-center gap-5">

        {/* LOGIN ICON */}
        <Link
          to="/login"
          className="hover:text-[#C8A24A] transition text-lg"
        >
          👤
        </Link>

        {/* CART ICON */}
        <Link
          to="/cart"
          className="hover:text-[#C8A24A] transition text-lg relative"
        >
          🛒
          <span className="absolute -top-2 -right-2 bg-[#C8A24A] text-black text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            {count}
          </span>
        </Link>

      </div>
    </div>
  );
};

export default Navbar;