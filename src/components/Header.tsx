import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navItems } from "../data";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 md:px-10 xl:px-16 ${
        isScrolled
          ? "bg-white shadow-md py-2 lg:py-3"
          : "bg-transparent py-3 lg:py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center space-x-2 flex-shrink-0"
            onClick={() => setIsMenuOpen(false)}
          >
            <img src="logo.png" alt="Printora Logo" className="h-8 w-8" />
            <span className="text-xl lg:text-2xl font-bold text-gray-900">
              Printora
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium text-sm xl:text-base transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "border-b-2 border-black"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="https://wa.me/6285704128095?text=Halo,%20saya%20ingin%20memesan%20kaos%20custom."
              target="_blank"
              rel="noopener"
              className="bg-[#d1f33a] text-gray-900 text-sm xl:text-base font-medium py-3 px-6 rounded-full hover:bg-[#bde834] transition-colors duration-300"
            >
              Order Now
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-md text-gray-800 hover:bg-gray-100 transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 lg:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 bottom-0 w-[280px] bg-white transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src="https://raw.githubusercontent.com/stackblitz/stackblitz-webcontainer-docs/main/docs/public/img/printora-logo.png"
              alt="Printora Logo"
              className="h-6 w-6"
            />
            <span className="text-lg font-bold text-gray-900">Printora</span>
          </Link>
          <button
            className="p-2 rounded-md text-gray-800 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="px-4 py-6">
          <div className="space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 text-base font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-[#d1f33a]"
                    : "text-gray-800 hover:text-[#d1f33a]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t">
            <Link
              to="/gallery"
              className="block w-full bg-[#d1f33a] text-gray-900 text-center font-medium py-3 px-6 rounded-full hover:bg-[#bde834] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Order Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
