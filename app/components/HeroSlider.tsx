"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { destinations } from "../data/destinations";
import { useRouter } from "next/navigation";

export default function HeroSlider() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [fadeTitle, setFadeTitle] = useState(true);
  const [fadeDesc, setFadeDesc] = useState(true);
  const [fadeButtons, setFadeButtons] = useState(true);
  const [zoom, setZoom] = useState(true);

  const length = destinations.length;

  const staggerFadeIn = useCallback(() => {
    setTimeout(() => setFadeTitle(true), 50);
    setTimeout(() => setFadeDesc(true), 200);
    setTimeout(() => setFadeButtons(true), 350);
    setZoom(true);
  }, []);

  const fadeOutElements = useCallback(
    (callback: () => void) => {
      setFadeTitle(false);
      setFadeDesc(false);
      setFadeButtons(false);
      setZoom(false);
      setTimeout(() => {
        callback();
        staggerFadeIn();
      }, 400);
    },
    [staggerFadeIn]
  );

  const handleNextSlide = useCallback(() => {
    fadeOutElements(() => setCurrent((prev) => (prev + 1) % length));
  }, [fadeOutElements, length]);

  const handlePrevSlide = useCallback(() => {
    fadeOutElements(() => setCurrent((prev) => (prev - 1 + length) % length));
  }, [fadeOutElements, length]);

  // Auto-rotation
  useEffect(() => {
    const timer = setInterval(handleNextSlide, 6000);
    return () => clearInterval(timer);
  }, [handleNextSlide]);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden bg-black">
      {destinations.map((dest, index) => (
        <div
          key={dest.id}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image with Smooth Ken Burns Effect */}
          <Image
            src={dest.image}
            alt={dest.cityName}
            fill
            priority={index === 0}
            className={`object-cover transition-transform duration-[7000ms] ease-[cubic-bezier(0.33,1,0.68,1)] ${
              zoom && index === current ? "scale-110" : "scale-100"
            }`}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 flex flex-col justify-center items-center text-center px-6">
            {/* Tagline */}
            {dest.tagline && (
              <p
                className={`text-sky-400 uppercase tracking-widest text-sm md:text-base mb-2 transform transition-all duration-700 ${
                  fadeTitle && index === current
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                {dest.tagline}
              </p>
            )}

            {/* City Name */}
            <h2
              className={`text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-2xl mb-4 transform transition-all duration-700 ${
                fadeTitle && index === current
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {dest.cityName}
            </h2>

            {/* Short Description */}
            <p
              className={`max-w-2xl text-lg text-gray-200 drop-shadow-md mb-8 leading-relaxed transform transition-all duration-700 ${
                fadeDesc && index === current
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {dest.shortDescription}
            </p>

            {/* Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-700 ${
                fadeButtons && index === current
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <button
                onClick={() => router.push(`/destinations/${dest.id}`)}
                className="px-8 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1 hover:scale-105 duration-300"
              >
                Read About This Destination
              </button>
              <button
                onClick={() => router.push("/reservation")}
                className="px-8 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow-lg hover:bg-sky-700 transition transform hover:-translate-y-1 hover:scale-105 duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-4 rounded-full z-10 cursor-pointer transition-all duration-300 backdrop-blur-sm hover:scale-110"
      >
        ❮
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-4 rounded-full z-10 cursor-pointer transition-all duration-300 backdrop-blur-sm hover:scale-110"
      >
        ❯
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {destinations.map((_, index) => (
          <button
            key={index}
            onClick={() => fadeOutElements(() => setCurrent(index))}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-white scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
