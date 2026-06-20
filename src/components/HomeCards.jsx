import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const HomeCards = ({ cards = [] }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 w-full max-w-6xl">

        {cards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{ y: -6 }}
            className="relative group"
          >

            {/* IMAGE */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={card.image}
                className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* TEXT */}
            <div className="mt-5 text-center">
              <h3 className="font-serif text-xl text-[#0B1B2B]">
                {card.name}
              </h3>
              <p className="text-gray-600 mt-1">{card.price}</p>
            </div>

            {/* HOVER OVERLAY WITH BUTTONS */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center gap-3 rounded-xl">

              <button
                onClick={() => navigate(`/product/${card.id}`)}
                className="bg-white text-black px-5 py-2 text-sm tracking-wide hover:bg-gray-200 transition"
              >
                Learn More
              </button>

              <button
                onClick={() => addToCart(card)}
                className="bg-[#C8A24A] text-black px-5 py-2 text-sm tracking-wide hover:opacity-90 transition"
              >
                Add to Cart
              </button>

            </div>

          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default HomeCards;