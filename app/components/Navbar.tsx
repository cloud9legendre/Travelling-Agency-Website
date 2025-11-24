"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentY > lastScrollY && currentY > 50) {
            // Scrolling down and past threshold → shrink
            setScrolled(true);
          } else if (currentY < lastScrollY) {
            // Scrolling up → grow back
            setScrolled(false);
          }

          setLastScrollY(currentY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuItems = ["Home", "Destinations", "Packages", "About", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg
      transform-gpu will-change-transform
      transition-[padding,box-shadow,background-color] duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]
      ${scrolled ? "py-3 shadow-md" : "py-5 shadow-sm"} -mb-px`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`text-3xl font-bold text-sky-600 transform-gpu transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]
          ${scrolled ? "scale-95" : "scale-100"}`}
        >
          Dream<span className="text-gray-800">Travels</span>
        </Link>

        {/* Desktop Menu */}
    <div className="hidden lg:flex items-center space-x-10 font-semibold">
      {menuItems.map((item) => (
        <Link
          key={item}
          href={`/${item.toLowerCase()}`}
          className="relative group transition-all duration-300 ease-out hover:scale-105"
        >
          <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-500 to-blue-700 group-hover:animate-gradient">
            {item}
          </span>
          <span className="
            absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-800 via-blue-500 to-blue-700
            rounded-full transition-all duration-300 ease-out group-hover:w-full
          "></span>
        </Link>
      ))}

      {/* CTA Button */}
      <Link
        href="/reservation"
        className="
          ml-6 px-6 py-2
          bg-gradient-to-r from-blue-800 via-blue-600 to-blue-700
          text-white font-semibold
          rounded-lg shadow-lg
          hover:scale-105 hover:shadow-2xl
          transition-all duration-300 ease-out
        "
      >
        Book Now
      </Link>
    </div>


        {/* Mobile Button */}
        <button
          className="lg:hidden text-gray-800 text-3xl focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-screen bg-white/80 backdrop-blur-lg shadow-2xl border-l border-white/40
        transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        rounded-tl-3xl`}
        style={{ width: "clamp(230px, 35vw, 300px)" }}
      >
        <button
          className="absolute top-6 right-6 text-3xl text-gray-700 hover:text-sky-600 transition"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

        <div className="flex flex-col items-center justify-center h-full space-y-6 text-gray-800 font-medium">
          {menuItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-lg hover:text-sky-600 transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            >
              {item}
            </Link>
          ))}

          <Link
            href="/packages"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-6 py-2 bg-sky-600 text-white rounded-lg shadow hover:bg-sky-700 transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
