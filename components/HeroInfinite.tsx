import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";


const HeroNew = () => {
  const products = [
    {
      title: "Creme Digital",
      link: "https://creme.com",
      thumbnail: "/assets/cremedigital.webp",
    },
    {
      title: "Cursor",
      link: "https://cursor.com",
      thumbnail: "/assets/cursor.webp",
    },
    {
      title: "Moon Beam",
      link: "https://moonbeam.com",
      thumbnail: "/assets/moonbeam.webp",
    },
    {
        title: "PixelPerfect",
        link: "https://pixelperfect.com",
        thumbnail: "/assets/pixelperfect.webp",
      },
      {
        title: "Rogue",
        link: "https://rogue.com",
        thumbnail: "/assets/rogue.webp",
      },
  ];

  return (
    <div className="hero-new-container">
      {/* Use the HeroParallax component */}
      <HeroParallax products={products} />
    </div>
  );
};

export default HeroNew;
