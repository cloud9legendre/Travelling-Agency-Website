"use client";

import Link from "next/link";
import Image from "next/image";
import { TourPackage } from "../data/tourPackages";
import { useRouter } from "next/navigation";

interface PackageCardProps {
  pkg: TourPackage;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  const router = useRouter();

  const handleBookNow = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the card link
    router.push(`/reservation?package=${encodeURIComponent(pkg.id)}`);
  };

  return (
    <div
      onClick={() => router.push(`/packages/${pkg.id}`)}
      className="group cursor-pointer rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-[1.02]"
    >
      {/* Image */}
      <div className="relative h-60 w-full overflow-hidden rounded-t-2xl">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transform-gpu transition-transform duration-300 ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
        <div className="absolute bottom-3 left-3 bg-white/90 text-gray-900 text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm shadow">
          {pkg.destination}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold text-gray-900 tracking-tight group-hover:text-sky-700 transition-colors duration-200">
          {pkg.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{pkg.description}</p>

        <div className="border-t border-gray-100"></div>
        <div className="flex justify-between items-center text-sm text-gray-700 mt-2">
          <span className="text-gray-500">{pkg.departureDate}</span>
          <span className="text-base font-semibold text-sky-700">${pkg.price.toLocaleString()}</span>
        </div>
      </div>

      {/* Book Now Button */}
      <div className="p-5 pt-0">
        <button
          onClick={handleBookNow}
          className="w-full py-2 bg-sky-600 text-white rounded-lg font-semibold shadow hover:bg-sky-700 transition transform hover:-translate-y-0.5 hover:scale-105"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
