"use client";

import { useState, useEffect } from "react";
import DestinationCard from "../components/DestinationCard";
import { destinations } from "../data/destinations";

export default function DestinationsPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Defer this to next microtask to avoid ESLint warning
    const timeout = setTimeout(() => setIsClient(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  if (!isClient) return null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100 py-20 px-6">
      <h1 className="text-5xl font-extrabold text-center text-sky-700 mb-12">
        Explore Top Destinations
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </main>
  );
}
