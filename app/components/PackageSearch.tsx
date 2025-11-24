"use client";

import { useState } from "react";

interface PackageSearchProps {
  onSearch: (filters: {
    destination?: string;
    departureDate?: string;
    priceRange?: [number, number];
  }) => void;
}

export default function PackageSearch({ onSearch }: PackageSearchProps) {
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");

  // handle search
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const min = minPrice === "" ? 0 : minPrice;
    const max = maxPrice === "" ? Number.MAX_SAFE_INTEGER : maxPrice;

    if (min > max) {
      alert("Minimum price cannot be greater than maximum price.");
      return;
    }

    const priceRange: [number, number] | undefined =
      min !== 0 || max !== Number.MAX_SAFE_INTEGER
        ? ([min, max] as [number, number])
        : undefined;

    onSearch({
      destination: destination.trim() || undefined,
      departureDate: departureDate || undefined,
      priceRange,
    });
  };

  // handle reset
  const handleReset = () => {
    setDestination("");
    setDepartureDate("");
    setMinPrice("");
    setMaxPrice("");
    onSearch({}); // reset search filters
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center gap-4 md:gap-6 max-w-6xl mx-auto transition-all duration-300 hover:shadow-lg"
    >
      {/* Destination */}
      <div className="flex-1 w-full">
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-sky-400 focus:outline-none transition text-gray-800 placeholder-gray-400"
        />
      </div>

      {/* Departure Date */}
      <div className="flex-1 w-full">
        <input
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-sky-400 focus:outline-none transition text-gray-800"
        />
      </div>

      {/* Price Range */}
      <div className="flex items-center gap-3">
        <input
          type="number"
          min={0}
          placeholder="Min"
          value={minPrice}
          onChange={(e) =>
            setMinPrice(e.target.value === "" ? "" : Number(e.target.value))
          }
          className="w-24 px-3 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-sky-400 focus:outline-none text-gray-800 placeholder-gray-400 transition"
        />
        <span className="text-gray-400 font-medium">–</span>
        <input
          type="number"
          min={0}
          placeholder="Max"
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(e.target.value === "" ? "" : Number(e.target.value))
          }
          className="w-24 px-3 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-sky-400 focus:outline-none text-gray-800 placeholder-gray-400 transition"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          type="submit"
          className="px-6 py-3 bg-sky-600 text-white font-semibold rounded-xl shadow-sm hover:shadow-md hover:bg-sky-700 active:scale-[0.98] transition-all duration-300"
        >
          Search
        </button>

        <button
          type="button"
          onClick={handleReset}
          className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 active:scale-[0.98] transition-all duration-300"
        >
          Reset
        </button>
      </div>
    </form>
  );
}
