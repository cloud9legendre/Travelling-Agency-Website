import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "../../data/aboutData";

interface PageProps {
  params: { id: string }; // plain object in Server Component
}

export default async function MemberDetail({ params }: PageProps) {
  const { id } = await params;
  const member = teamMembers.find((m) => m.id === id);

  if (!member) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200">
        <p className="text-gray-500 text-lg font-medium">Profile not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-sky-50/30 to-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Portrait */}
        <div className="relative flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-lg ring-4 ring-white/50 hover:-translate-y-2 hover:scale-105 transition-transform duration-700">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right: Info */}
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold text-gray-900">{member.name}</h1>
          <h2 className="text-xl text-sky-700 uppercase">{member.title}</h2>
          <p className="text-gray-700">{member.bioLong || member.bio}</p>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="max-w-7xl mx-auto mt-28">
        <h3 className="text-3xl font-bold text-center mb-10">Meet the Team</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers
            .filter((m) => m.id !== member.id)
            .slice(0, 3)
            .map((related) => (
              <Link
                key={related.id}
                href={`/about/${related.id}`}
                className="group relative rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="relative w-full h-64 overflow-hidden rounded-3xl">
                  <Image
                    src={related.image}
                    alt={related.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/60 to-transparent rounded-3xl"></div>
                </div>
                <div className="p-6 text-center bg-white/90 backdrop-blur-lg rounded-b-3xl">
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-sky-700 transition-colors">
                    {related.name}
                  </h4>
                  <p className="text-gray-600 text-sm uppercase">{related.title}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </main>
  );
}
