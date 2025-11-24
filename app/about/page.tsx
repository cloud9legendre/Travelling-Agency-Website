import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "../data/aboutData";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-sky-50/40 to-white py-24 px-6">
      {/* Header Section */}
      <section className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-5xl font-extrabold text-sky-800 mb-6 tracking-tight">
          Our Story & Vision
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          At <span className="font-semibold text-sky-700">DreamTravels</span>,
          we’re driven by one mission — to turn journeys into lifelong memories.
          Our team of explorers, storytellers, and strategists is united by a
          passion for connecting people with experiences that truly matter.
        </p>
      </section>

      {/* Team Grid */}
      <section className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {teamMembers.map((member) => (
          <Link
            key={member.id}
            href={`/about/${member.id}`}
            className="group relative bg-white/70 backdrop-blur-lg border border-sky-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-sky-200"
          >
            {/* Image Container with Balanced Aspect Ratio */}
            <div className="flex justify-center pt-8">
              <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-md ring-4 ring-white/80 group-hover:ring-sky-100 transition-all duration-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Card Text */}
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-sky-700 transition-colors">
                {member.name}
              </h2>
              <p className="text-sky-600 mt-1 font-medium">{member.title}</p>

              <p className="text-gray-600 mt-4 text-sm leading-relaxed line-clamp-3">
                {member.bio}
              </p>

              <div className="mt-6">
                <span className="inline-block px-5 py-2 text-sm font-semibold text-sky-700 border border-sky-100 rounded-full bg-sky-50/50 group-hover:bg-sky-100 transition-all">
                  View Profile
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
