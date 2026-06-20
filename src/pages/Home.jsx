import React from "react";
import HomeCards from "../components/HomeCards";
import Section from "../components/Section";
import products from "../data/productsData";

const Home = () => {
  const suits     = products.filter((p) => p.category === "suits").slice(0, 2);
  const oldMoney  = products.filter((p) => p.category === "old-money").slice(0, 2);
  const shoes     = products.filter((p) => p.category === "shoes").slice(0, 2);
  const watches   = products.filter((p) => p.category === "watches").slice(0, 2);
  const perfume   = products.filter((p) => p.category === "perfumes").slice(0, 2);

  return (
    <div className="w-full bg-[#F6F1E8] pt-24">

      {/* ================= HERO ================= */}
      <div className="h-[90vh] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <img src="https://media.gq-magazine.co.uk/photos/62fe0a734d24284dcecd067a/master/w_1600%2Cc_limit/DavidB_03.jpg" className="w-full h-full object-cover" />
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
        exploreLink="/products?category=suits"
      >
        <HomeCards cards={suits} />
      </Section>

      {/* ================= BRAND BREAK IMAGE ================= */}
      <div className="h-[70vh] relative my-10">
        <img src="https://cdn.dribbble.com/userupload/29590636/file/original-af9f020519a0f411fa993853a1fa052e.png?resize=752x&vertical=center" className="w-full h-full object-cover" />

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
        exploreLink="/products?category=old-money"
      >
        <HomeCards cards={oldMoney} />
      </Section>

      {/* ================= SHOES ================= */}
      <Section
        label="HERITAGE FOOTWEAR"
        title="Shoes"
        desc="Crafted leather for everyday elegance"
        exploreText="Explore Shoes"
        exploreLink="/products?category=shoes"
      >
        <HomeCards cards={shoes} />
      </Section>

      {/* ================= WATCHES ================= */}
      <Section
        label="TIMEPIECES"
        title="Watches"
        desc="Mechanical heritage with modern precision"
        exploreText="Explore Watches"
        exploreLink="/products?category=watches"
      >
        <HomeCards cards={watches} />
      </Section>

      {/* ================= PERFUME ================= */}
      <Section
        label="SIGNATURE FRAGRANCE"
        title="Perfume"
        desc="Identity captured in scent"
        exploreText="Explore Perfumes"
        exploreLink="/products?category=perfumes"
      >
        <HomeCards cards={perfume} />
      </Section>

      {/* ================= FINAL CTA ================= */}
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