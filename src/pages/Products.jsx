import React, { useMemo, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { useCart } from "../context/CartContext";

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const urlCategory = queryParams.get("category");
  const { addToCart } = useCart();

  // ================= STATE =================
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState(urlCategory || "all");
  const [sub, setSub] = useState("all");
  const [color, setColor] = useState("all");
  const [expandedCategory, setExpandedCategory] = useState(
    urlCategory || null
  );

  const img =
    "https://yoursuittrend.com/wp-content/uploads/turtle-neck-with-suit-12.jpg";

  // ================= PRODUCTS =================
  const products = [
    { id: 1, name: "Savile Row Suit", category: "suits", sub: "formal", color: "black", price: "$499", image: img },
    { id: 2, name: "Navy Royal Suit", category: "suits", sub: "formal", color: "navy", price: "$699", image: img },
    { id: 3, name: "Black Tuxedo", category: "suits", sub: "tuxedo", color: "black", price: "$899", image: img },

    { id: 4, name: "Oxford Shoes", category: "shoes", sub: "oxford", color: "brown", price: "$399", image: img },
    { id: 5, name: "Chelsea Boots", category: "shoes", sub: "boots", color: "black", price: "$459", image: img },

    { id: 6, name: "Gold Chronograph", category: "watches", sub: "chrono", color: "gold", price: "$999", image: img },
    { id: 7, name: "Skeleton Watch", category: "watches", sub: "skeleton", color: "silver", price: "$1299", image: img },

    { id: 8, name: "Royal Oud", category: "perfumes", sub: "oud", color: "amber", price: "$249", image: img },
    { id: 9, name: "White Musk", category: "perfumes", sub: "musk", color: "white", price: "$199", image: img },

    { id: 10, name: "Cashmere Coat", category: "old-money", sub: "coat", color: "beige", price: "$899", image: img },
  ];

  // ================= SUBCATEGORIES =================
  const subMap = {
    suits: ["all", "formal", "tuxedo"],
    shoes: ["all", "oxford", "boots"],
    watches: ["all", "chrono", "skeleton"],
    perfumes: ["all", "oud", "musk"],
    "old-money": ["all", "coat"],
  };

  const colors = [
    "all",
    "black",
    "white",
    "navy",
    "brown",
    "beige",
    "gold",
    "silver",
    "amber",
  ];

  const activeSubs = category !== "all" ? subMap[category] : null;

  // ================= FILTER =================
  const filtered = useMemo(() => {
    return products.filter((p) => {
      const c1 = category === "all" ? true : p.category === category;
      const c2 = sub === "all" ? true : p.sub === sub;
      const c3 = color === "all" ? true : p.color === color;
      return c1 && c2 && c3;
    });
  }, [category, sub, color]);

  const resetFilters = () => {
    setCategory("all");
    setSub("all");
    setColor("all");
    setExpandedCategory(null);
  };

  const isActive =
    category !== "all" || sub !== "all" || color !== "all";

  return (
    <div className="min-h-screen bg-[#F6F1E8]">

      {/* HERO */}
      <div className="h-[40vh] flex items-center justify-center bg-[#0B1B2B] text-white">
        <h1 className="font-serif text-5xl tracking-[0.3em]">
          PRODUCTS
        </h1>
      </div>

      {/* FILTER BUTTON */}
      <div className="flex justify-end px-8 py-6">
        <button
          onClick={() => setOpen(true)}
          className="tracking-[0.3em] text-sm"
        >
          ☰ FILTER
        </button>
      </div>

      {/* ACTIVE FILTERS */}
      {isActive && (
        <div className="flex flex-wrap gap-2 px-8 pb-4">
          {category !== "all" && (
            <div className="px-3 py-1 border text-xs">
              {category.toUpperCase()}
            </div>
          )}
          {sub !== "all" && (
            <div className="px-3 py-1 border text-xs">
              {sub.toUpperCase()}
            </div>
          )}
          {color !== "all" && (
            <div className="px-3 py-1 border text-xs">
              {color.toUpperCase()}
            </div>
          )}
        </div>
      )}

      {/* PRODUCT COUNT */}
      <div className="px-8 mb-6">
        <p className="text-xs tracking-[0.3em] text-gray-500">
          {filtered.length} PRODUCTS
        </p>
      </div>

      {/* DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed right-0 top-0 w-[380px] h-full bg-[#F6F1E8] z-50 p-8 flex flex-col overflow-y-auto"
            >

              {/* HEADER */}
              <div className="flex justify-between items-center mb-8">
                <p className="text-xs tracking-[0.3em] text-gray-500">
                  {isActive ? "FILTER ACTIVE" : "SELECT FILTER"}
                </p>
                <button onClick={() => setOpen(false)}>
                  <X />
                </button>
              </div>

              {/* CATEGORY ACCORDION */}
              <div className="mb-8">
                <p className="text-xs tracking-[0.3em] text-gray-500 mb-4">
                  CATEGORY
                </p>

                <div className="space-y-4">
                  <button
                    onClick={() => {
                      setCategory("all");
                      setSub("all");
                      setExpandedCategory(null);
                    }}
                    className={`w-full text-left text-sm ${
                      category === "all" ? "font-semibold" : ""
                    }`}
                  >
                    ALL PRODUCTS
                  </button>

                  {Object.entries(subMap).map(([cat, subs]) => (
                    <div key={cat}>
                      <button
                        onClick={() => {
                          setCategory(cat);
                          setSub("all");
                          setExpandedCategory(
                            expandedCategory === cat ? null : cat
                          );
                        }}
                        className="w-full flex justify-between items-center text-sm"
                      >
                        <span
                          className={
                            category === cat ? "font-semibold" : ""
                          }
                        >
                          {cat.toUpperCase()}
                        </span>
                        <span>
                          {expandedCategory === cat ? "−" : "+"}
                        </span>
                      </button>

                      <AnimatePresence>
                        {expandedCategory === cat && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pt-3 flex flex-col gap-3">
                              {subs
                                .filter((s) => s !== "all")
                                .map((s) => (
                                  <button
                                    key={s}
                                    onClick={() => {
                                      setCategory(cat);
                                      setSub(s);
                                    }}
                                    className={`text-left text-xs tracking-[0.2em] ${
                                      sub === s
                                        ? "text-black font-semibold"
                                        : "text-gray-500"
                                    }`}
                                  >
                                    {s.toUpperCase()}
                                  </button>
                                ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              {/* COLOR FIXED (NO BLACK OVERWRITE ISSUE) */}
              <div className="mb-10">
                <p className="text-xs tracking-[0.3em] text-gray-500 mb-5">
                  COLOR
                </p>

                <div className="grid grid-cols-4 gap-4">
                  {colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setColor(c)}
                      className="flex flex-col items-center gap-2"
                    >
                      {c === "all" ? (
                        <div
                          className={`w-10 h-10 rounded-full border flex items-center justify-center text-[10px] ${
                            color === c
                              ? "border-[#C8A24A] bg-[#C8A24A]"
                              : "border-gray-300"
                          }`}
                        >
                          ALL
                        </div>
                      ) : (
                        <>
                          <div
                            className={`w-10 h-10 rounded-full transition ${
                              color === c
                                ? "ring-2 ring-[#C8A24A] ring-offset-2"
                                : ""
                            }`}
                            style={{
                              backgroundColor: c,
                              border:
                                c === "white"
                                  ? "1px solid #d1d5db"
                                  : "none",
                            }}
                          />
                          <span className="text-[10px] tracking-wide uppercase text-gray-500">
                            {c}
                          </span>
                        </>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* RESET + DONE */}
              <div className="mt-auto">
                <button
                  onClick={resetFilters}
                  className="w-full py-3 border text-xs tracking-[0.2em]"
                >
                  RESET FILTERS
                </button>

                <button
                  onClick={() => setOpen(false)}
                  className="w-full mt-3 py-3 bg-black text-white text-xs tracking-[0.2em] flex items-center justify-center gap-2"
                >
                  <Check size={14} />
                  DONE
                </button>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* PRODUCTS */}
      <div className="px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {filtered.map((p) => (
            <div key={p.id} className="group relative overflow-hidden rounded-xl">
              <img
                src={p.image}
                className="h-[420px] w-full object-cover group-hover:scale-105 transition"
              />

              {/* TEXT BELOW IMAGE - matches Home.jsx HomeCards structure */}
              <div className="mt-5 text-center">
                <h3 className="font-serif text-xl text-[#0B1B2B]">{p.name}</h3>
                <p className="text-gray-600 mt-1">{p.price}</p>
              </div>

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center gap-3">
                <button className="bg-white text-black px-5 py-2 text-sm tracking-wide hover:bg-gray-200 transition">
                  Learn More
                </button>

                <button
                  onClick={() => addToCart(p)}
                  className="bg-[#C8A24A] text-black px-5 py-2 text-sm tracking-wide hover:opacity-90 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No products found
          </div>
        )}
      </div>

      {/* BACK */}
      <div className="text-center pb-20">
        <Link to="/collection" className="text-[#C8A24A]">
          ← Back to Collection
        </Link>
      </div>
    </div>
  );
};

export default Products;