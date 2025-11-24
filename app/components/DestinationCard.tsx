"use client";

import Link from "next/link";
import Image from "next/image";
import { Destination } from "../data/destinations";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link
      href={`/destinations/${destination.id}`}
      className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 duration-300 overflow-hidden"
    >
      <div className="relative w-full h-64">
        <Image
          src={destination.image}
          alt={destination.cityName}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-5 space-y-2">
        <h3 className="text-2xl font-semibold text-sky-700">
          {destination.cityName}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3">
          {destination.description}
        </p>
        <p className="text-sm text-gray-500">
          By {destination.author} • {destination.createdAt}
        </p>
      </div>
    </Link>
  );
}
