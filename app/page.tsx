import HeroSlider from "./components/HeroSlider";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start w-full relative -mt-[72px]">
      {/* Hero Slider */}
      <section className="w-full">
        <HeroSlider />
      </section>

      {/* Intro / Call-to-Action */}
      <section className="w-full flex flex-col items-center text-center px-6 py-16 bg-gradient-to-b from-sky-50 to-white">
        <h1 className="text-4xl md:text-5xl font-extrabold text-sky-700 leading-tight max-w-3xl">
          Discover the World with Dream Travels
        </h1>
        <p className="mt-6 text-gray-700 text-lg md:text-xl max-w-2xl leading-relaxed">
          From the pristine beaches of Sri Lanka to the majestic peaks of the Himalayas — we bring you closer to your dream destinations with curated travel experiences.
        </p>
         <Link
          href="/packages"
          className="mt-8 px-8 py-4 bg-sky-600 text-white font-semibold rounded-lg shadow-lg hover:bg-sky-700 transition-all duration-300"
        >
          Explore Packages
        </Link>
      </section>
    </main>
  );
}
