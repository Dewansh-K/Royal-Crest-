import React from "react";
import HomeCards from "../components/HomeCards";
import Section from "../components/Section";

const Home = () => {
  const suits = [
    { id: 1, name: "Savile Row Suit", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPgdPz_9BMhMWMxAAWvvLfu5Cwwk9nZeiSzWdg1dd_ljXmysmBZlEacg23&s=10" , price: "$499" },
    { id: 2, name: "Midnight Tailored", image: "https://novosuit.com/cdn/shop/files/1735219568652_1.jpg?crop=center&height=1000&v=1752585388&width=1000", price: "$699" },
  ];

  const oldMoney = [
    { id: 1, name: "Cashmere Overcoat", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8DaMIOZBpwJVCi_z9NVosQoE8J11CChdSBDYjIr6HET_HVo0u08nr7fM&s=10", price: "$899" },
    { id: 2, name: "Ivory Knitwear", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxQZYtxLgfbQ9zzuBKZ2uA7R9rxpxUy6a-J6JFRMNdUnh3gIGeEkpn5666&s=10", price: "$399" },
  ];

  const shoes = [
    { id: 1, name: "Oxford Classic", image: "https://img.tatacliq.com/images/i21//437Wx649H/MP000000024646675_437Wx649H_202412070212291.jpeg", price: "$399" },
    { id: 2, name: "Monk Strap", image: "https://assets.myntassets.com/assets/images/21108034/2022/12/7/7d11f45f-d581-463b-a33c-78407ee954391670406148614HouseofPataudiMenGenuineLeatherStrapsFormalMonks1.jpg", price: "$429" },
  ];

  const watches = [
    { id: 1, name: "Heritage Automatic", image: "https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/t/i/titoni-heritage-94020-s-681-multiple-2.jpg", price: "$1299" },
    { id: 2, name: "Royal Chronograph", image: "https://www.coveted.com/_next/image?url=https%3A%2F%2Fassets.coveted.com%2Fwatches%2Fimages%2Faudemars_piguet%2Ffinal_1724224823_3ee8ed5b39_watch.png.transform.appdpmain.png&w=3840&q=75", price: "$999" },
  ];

  const perfume = [
    { id: 1, name: "Dior Sauvage", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL2n9w-EpE7EnJ3CgkfY5k52fsamgykfsJXRut53ZXQ-Awa0ridGHPDS0&s=10", price: "$199" },
    { id: 2, name: "Tom Ford Oud Wood", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAg-ifuRHyBSh1nop7UNl2bTn0WjSzsQe1b_6A15jameMBRg8cp2zqIqE&s=10", price: "$249" },
  ];

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