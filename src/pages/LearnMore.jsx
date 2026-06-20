import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/productsData";

const LearnMore = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <>
        <div className="min-h-screen bg-[#F6F1E8] flex flex-col items-center justify-center">
          <p className="text-gray-500 tracking-widest text-sm">PRODUCT NOT FOUND</p>
          <button
            onClick={() => navigate("/products")}
            className="mt-6 px-6 py-3 border border-black text-xs tracking-[0.2em] hover:bg-black hover:text-white transition"
          >
            BACK TO PRODUCTS
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      {/* HERO */}
      <div className="min-h-screen bg-[#F6F1E8] pt-24">

        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[600px] object-cover"
              />
            </div>

            {/* DETAILS */}
            <div className="flex flex-col justify-center gap-8">

              {/* CATEGORY LABEL */}
              <p className="text-xs tracking-[0.4em] text-[#C8A24A] uppercase">
                {product.category.replace("-", " ")}
              </p>

              {/* NAME */}
              <h1 className="font-serif text-4xl md:text-5xl text-[#0B1B2B] leading-tight">
                {product.name}
              </h1>

              {/* PRICE */}
              <p className="text-2xl text-gray-700">
                {product.price}
              </p>

              {/* DIVIDER */}
              <div className="w-12 h-px bg-[#C8A24A]" />

              {/* DESCRIPTION */}
              <p className="text-gray-600 leading-relaxed text-base max-w-md">
                {product.description}
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button
                  onClick={() => addToCart(product)}
                  className="px-8 py-4 bg-[#0B1B2B] text-white text-xs tracking-[0.3em] hover:opacity-80 transition"
                >
                  ADD TO CART
                </button>

                <button
                  onClick={() => navigate(-1)}
                  className="px-8 py-4 border border-black text-xs tracking-[0.3em] hover:bg-black hover:text-white transition"
                >
                  GO BACK
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default LearnMore;