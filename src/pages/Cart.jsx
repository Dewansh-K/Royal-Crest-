import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeItem, total } = useCart();

  return (
    <div className="min-h-screen bg-[#F6F1E8]">

      {/* ================= HERO ================= */}
      <div className="h-[35vh] flex items-center justify-center bg-[#0B1B2B] text-white">
        <h1 className="font-serif text-5xl tracking-[0.3em]">
          YOUR CART
        </h1>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-5xl mx-auto px-6 py-16">

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 mb-6">
              Your cart is empty
            </p>

            <Link
              to="/products"
              className="px-6 py-3 border border-black text-xs tracking-[0.2em]"
            >
              CONTINUE SHOPPING
            </Link>
          </div>
        ) : (
          <div className="space-y-6">

            {/* CART ITEMS */}
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="flex items-center justify-between bg-white p-4 border"
                >

                  {/* IMAGE + NAME */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      className="w-20 h-20 object-cover"
                    />

                    <div>
                      <h2 className="font-serif text-lg">
                        {item.name}
                      </h2>
                      <p className="text-sm text-gray-500">
                        ${item.price}
                      </p>
                    </div>
                  </div>

                  {/* QTY CONTROLS */}
                  <div className="flex items-center gap-3">

                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="p-1 border"
                    >
                      <Minus size={14} />
                    </button>

                    <span className="text-sm w-6 text-center">
                      {item.qty}
                    </span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="p-1 border"
                    >
                      <Plus size={14} />
                    </button>

                  </div>

                  {/* TOTAL + REMOVE */}
                  <div className="flex items-center gap-6">

                    <p className="text-sm font-medium">
                      ${item.price * item.qty}
                    </p>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500"
                    >
                      <X size={18} />
                    </button>

                  </div>

                </motion.div>
              ))}
            </AnimatePresence>

            {/* TOTAL SUMMARY */}
            <div className="border-t pt-6 flex justify-between items-center">

              <h3 className="text-lg font-serif">
                Total
              </h3>

              <p className="text-xl font-semibold">
                ${total}
              </p>

            </div>

            {/* CHECKOUT BUTTON */}
            <div className="text-right mt-6">

              <button className="px-8 py-3 bg-black text-white text-xs tracking-[0.2em] hover:opacity-80 transition">
                PROCEED TO CHECKOUT
              </button>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default Cart;