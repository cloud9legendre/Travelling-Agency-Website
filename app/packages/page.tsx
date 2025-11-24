"use client";

import { useState } from "react";
import PackageCard from "../components/PackageCard";
import PackageSearch from "../components/PackageSearch";
import { tourPackages, TourPackage } from "../data/tourPackages";

export default function PackagesPage() {
  const [filteredPackages, setFilteredPackages] = useState<TourPackage[]>(tourPackages);

  const handleSearch = (filters: {
    destination?: string;
    departureDate?: string;
    priceRange?: [number, number];
  }) => {
    const results = tourPackages.filter((pkg) => {
      const matchDestination = filters.destination
        ? pkg.destination.toLowerCase().includes(filters.destination.toLowerCase())
        : true;
      const matchDeparture = filters.departureDate
        ? pkg.departureDate >= filters.departureDate
        : true;
      const matchPrice = filters.priceRange
        ? pkg.price >= filters.priceRange[0] && pkg.price <= filters.priceRange[1]
        : true;

      return matchDestination && matchDeparture && matchPrice;
    });

    setFilteredPackages(results);
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100 py-20 px-6 lg:px-10 overflow-hidden">
      {/* Decorative Background Glow */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-sky-200/40 blur-3xl rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-sky-300/30 blur-3xl rounded-full -z-10 animate-pulse delay-300"></div>

      {/* Title */}
      <section className="text-center space-y-3 mb-12">
        <h1 className="text-5xl font-extrabold text-sky-800 tracking-tight">
          Explore Our Exclusive <span className="text-sky-600">Tour Packages</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Discover unforgettable destinations, curated experiences, and seamless journeys designed just for you.
        </p>
      </section>

      {/* Search Bar */}
      <div className="max-w-5xl mx-auto mb-14">
        <PackageSearch onSearch={handleSearch} />
      </div>

      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto">
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPackages.map((pkg: TourPackage) => (
              <div
                key={pkg.id}
                className="transform hover:scale-[1.02] transition-transform duration-300"
              >
                <PackageCard pkg={pkg} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 space-y-4">
            <p className="text-gray-500 text-xl font-medium">
              No packages match your search.
            </p>
            <button
              onClick={() => setFilteredPackages(tourPackages)}
              className="px-6 py-3 bg-gradient-to-r from-sky-600 to-sky-500 text-white rounded-xl font-semibold hover:from-sky-700 hover:to-sky-600 transition-all duration-300"
            >
              View All Packages
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
