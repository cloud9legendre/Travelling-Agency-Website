import Image from "next/image";
import Link from "next/link";
import { tourPackages, TourPackage } from "../../data/tourPackages";

// Next.js 16+ — params is a Promise
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PackageDetail({ params }: PageProps) {
  const { id } = await params; // unwrap the Promise

  const pkg: TourPackage | undefined = tourPackages.find(
    (p) => p.id.toString() === id
  );

  if (!pkg) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-sky-50 to-white">
        <p className="text-gray-600 text-lg font-medium">Package not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-100 py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 space-y-16">

        {/* HERO SECTION */}
        <div className="relative w-full h-[520px] rounded-3xl overflow-hidden shadow-2xl group">
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            priority
            className="object-cover transition-transform duration-[2s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-5xl font-extrabold drop-shadow-2xl tracking-tight">
              {pkg.title}
            </h1>
            <p className="mt-2 text-lg font-light opacity-90">
              Discover the beauty of {pkg.destination}
            </p>
          </div>
        </div>

        {/* DETAILS CARD */}
        <section className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-sky-100 p-10 space-y-8">
          <div className="flex flex-wrap gap-6 justify-between text-gray-700 text-lg font-medium">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌍</span>
              <span>
                <strong className="text-sky-700">{pkg.destination}</strong>
              </span>
            </div>

            {pkg.duration && (
              <div className="flex items-center gap-2">
                <span className="text-2xl">🕒</span>
                <span>
                  Duration:{" "}
                  <strong className="text-sky-700">{pkg.duration}</strong>
                </span>
              </div>
            )}

            <div className="flex items-center gap-2">
              <span className="text-2xl">💰</span>
              <span>
                Price:{" "}
                <strong className="text-sky-700">
                  ${pkg.price.toLocaleString()}
                </strong>
              </span>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed text-lg sm:text-xl border-t border-gray-200 pt-6">
            {pkg.description}
          </p>

          {/* Highlights */}
          <div className="pt-8">
            <h2 className="text-2xl font-semibold text-sky-800 mb-4">
              What’s Included
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-600 text-base">
              <li>✨ Guided sightseeing tours</li>
              <li>🏨 Premium hotel accommodations</li>
              <li>🍽️ Breakfast & selected meals</li>
              <li>🚐 Airport pickup and transfers</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="flex justify-center pt-10">
            <Link
              href={`/reservation?package=${encodeURIComponent(pkg.id)}`}
              className="px-10 py-4 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
            >
              Book Your Experience
            </Link>
          </div>
        </section>

        {/* FOOTER NOTE */}
        <div className="text-center text-gray-500 text-sm pt-6">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </main>
  );
}

// ✅ Pre-generate static pages
export async function generateStaticParams() {
  return tourPackages.map((pkg) => ({
    id: pkg.id.toString(),
  }));
}
