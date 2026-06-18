import React from "react";
import HomeCards from "../components/HomeCards";
import Section from "../components/Section";

const img =
  "https://yoursuittrend.com/wp-content/uploads/turtle-neck-with-suit-12.jpg";

const Home = () => {
  const suits = [
    { id: 1, name: "Savile Row Suit", image: img, price: "$499" },
    { id: 2, name: "Midnight Tailored", image: img, price: "$699" },
  ];

  const oldMoney = [
    { id: 1, name: "Cashmere Overcoat", image: img, price: "$899" },
    { id: 2, name: "Ivory Knitwear", image: img, price: "$399" },
  ];

  const shoes = [
    { id: 1, name: "Oxford Classic", image: img, price: "$399" },
    { id: 2, name: "Monk Strap", image: img, price: "$429" },
  ];

  const watches = [
    { id: 1, name: "Heritage Automatic", image: img, price: "$1299" },
    { id: 2, name: "Royal Chronograph", image: img, price: "$999" },
  ];

  const perfume = [
    { id: 1, name: "Noir Essence", image: img, price: "$199" },
    { id: 2, name: "Royal Oud", image: img, price: "$249" },
  ];

  return (
    <div className="w-full bg-[#F6F1E8]">

      {/* ================= HERO ================= */}
      <div className="h-[90vh] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <img src={img} className="w-full h-full object-cover" />
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center bg-[#0B1B2B] text-white">
          <h1 className="font-serif text-6xl md:text-7xl tracking-[0.3em] text-center">
            ROYAL CREST
          </h1>
        </div>
      </div>

      {/* ================= INTRO ================= */}
      <Section
        title="Quiet Luxury Defined by Restraint"
        desc="A curated wardrobe built for modern discipline and timeless identity."
      />

      {/* ================= SUITS ================= */}
      <Section
        label="TAILORED HERITAGE"
        title="Suits"
        desc="Precision tailoring inspired by Savile Row tradition"
        exploreText="Explore Suits"
        exploreLink="/collection/suits"
      >
        <HomeCards cards={suits} />
      </Section>

      {/* ================= BRAND BREAK IMAGE ================= */}
      <div className="h-[70vh] relative my-10">
        <img src={img} className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
          <h2 className="font-serif text-5xl md:text-6xl text-white">
            Crafted for the Few
          </h2>

          <p className="mt-6 text-white/70 max-w-xl text-lg">
            Every piece is designed with restraint, precision, and permanence.
          </p>
        </div>
      </div>

      {/* ================= OLD MONEY ================= */}
      <Section
        label="QUIET LUXURY"
        title="Old Money Essentials"
        desc="Understated pieces for refined living"
        exploreText="Explore Old Money"
        exploreLink="/collection/old-money"
      >
        <HomeCards cards={oldMoney} />
      </Section>

      {/* ================= SHOES ================= */}
      <Section
        label="HERITAGE FOOTWEAR"
        title="Shoes"
        desc="Crafted leather for everyday elegance"
        exploreText="Explore Shoes"
        exploreLink="/collection/shoes"
      >
        <HomeCards cards={shoes} />
      </Section>

      {/* ================= WATCHES ================= */}
      <Section
        label="TIMEPIECES"
        title="Watches"
        desc="Mechanical heritage with modern precision"
        exploreText="Explore Watches"
        exploreLink="/collection/watches"
      >
        <HomeCards cards={watches} />
      </Section>

      {/* ================= PERFUME ================= */}
      <Section
        label="SIGNATURE FRAGRANCE"
        title="Perfume"
        desc="Identity captured in scent"
        exploreText="Explore Perfumes"
        exploreLink="/collection/perfume"
      >
        <HomeCards cards={perfume} />
      </Section>

      {/* ================= FINAL CTA (UPDATED) ================= */}
      <Section
        dark
        title="Join The Private Circle"
        desc="Limited access. Timeless pieces only."
        exploreText="Join Now"
        exploreLink="/join"
      />

    </div>
  );
};

export default Home;