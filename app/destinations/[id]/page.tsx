"use client";

import { motion } from "framer-motion";
import { destinations } from "../../data/destinations";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function DestinationDetail({ params }: PageProps) {
  const { id } = use(params);
  const destination = destinations.find((d) => d.id === id);

  if (!destination) {
    return (
      <main className="flex h-screen items-center justify-center bg-gradient-to-b from-white via-sky-50 to-sky-100 text-gray-600">
        Destination not found.
      </main>
    );
  }

  const related = destinations.filter((d) => d.id !== id).slice(0, 3);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-white text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[75vh] w-full overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.cityName}
          fill
          priority
          className="object-cover scale-105 hover:scale-110 transition-transform duration-[2000ms] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-20 left-8 md:left-16 max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-sky-600 to-sky-400 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
            {destination.cityName}
          </h1>
          <p className="text-sky-700/80 text-lg mt-3 font-medium">
            {destination.tagline ||
              "Discover the hidden beauty and timeless charm"}
          </p>
        </motion.div>
      </section>

      {/* Description Section */}
      <section className="relative z-10 -mt-10 md:-mt-16">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-b from-white/70 to-white/90 backdrop-blur-xl rounded-3xl p-10 md:p-14 border border-sky-100/60 shadow-[0_8px_25px_rgba(0,0,0,0.06)]"
          >
            <motion.p
              className="text-gray-700 text-lg md:text-xl leading-relaxed tracking-wide space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {destination.description}
            </motion.p>

            {destination.highlights && (
              <motion.ul
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="list-disc list-inside text-sky-700/90 space-y-2 font-medium mt-6"
              >
                {destination.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </motion.ul>
            )}

            <motion.div
              className="mt-10 flex flex-wrap justify-between items-center text-sm text-gray-500 border-t border-sky-100 pt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <span>
                  ✍️{" "}
                  <span className="font-semibold text-sky-700">
                    {destination.author}
                  </span>
                </span>
                <span>📅 {destination.createdAt}</span>
                {destination.updatedAt && (
                  <span className="text-sky-700">
                    🔁 Updated: {destination.updatedAt}
                  </span>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="mt-4 md:mt-0 px-8 py-3 bg-gradient-to-r from-sky-600 to-sky-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:from-sky-700 hover:to-sky-600 transition-all duration-400"
              >
                Plan Your Trip
              </motion.button>
            </motion.div>
          </motion.article>
        </div>
      </section>

      {/* Related Destinations */}
      <motion.section
        className="max-w-6xl mx-auto px-6 md:px-8 py-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-12 text-center">
          More Places You Might Love
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/destinations/${d.id}`}
                className="group rounded-2xl overflow-hidden bg-white/90 border border-sky-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={d.image}
                    alt={d.cityName}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-semibold text-sky-800 group-hover:text-sky-600 transition-colors">
                    {d.cityName}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {d.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
