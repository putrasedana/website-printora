import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen pt-24 lg:pt-32 xl:pt-44 pb-16 xl:pb-24 bg-gradient-to-b from-[#d1f33a]/10 to-white  md:px-10 lg:px-16  ">
      <div className="container mx-auto px-4 xl:px-8 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-[55%] space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold  text-gray-900 leading-tight">
            Your Custom Designs, Premium Quality Shirts
          </h1>
          <p className="text-lg text-gray-700 max-w-lg">
            Transform your creativity into high-quality custom t-shirts. Perfect
            for personal style, gifts, team events, or growing your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://wa.me/6285704128095?text=Halo,%20saya%20ingin%20memesan%20kaos%20custom."
              target="_blank"
              rel="noopener"
              className="bg-[#d1f33a] text-gray-900 font-medium py-3 px-8 rounded-full hover:bg-[#bde834] transition-colors duration-300 flex items-center justify-center"
            >
              Order Now
              <ChevronRight className="h-5 w-5 ml-1" />
            </a>
            <Link
              to="/gallery"
              className="border-2 border-gray-900 text-gray-900 font-medium py-3 px-8 rounded-full hover:border-[#bde834] hover:bg-[#bde834] transition-colors duration-300 "
            >
              View Gallery
            </Link>
          </div>
        </div>
        <div className="lg:w-[45%] relative">
          <div className="relative z-10 animate-float">
            <img
              src="hero-img.jpg"
              alt="T-shirt mockup"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-[#d1f33a] rounded-full opacity-20 blur-3xl -z-10"></div>
          <div className="absolute -top-6 -left-6 w-60 h-60 bg-[#d1f33a] rounded-full opacity-20 blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
