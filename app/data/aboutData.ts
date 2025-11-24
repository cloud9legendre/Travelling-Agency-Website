export interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
  bioLong?: string;
  quote?: string;
  author: string;
  createdAt: string;
  updatedAt?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Sarah Perera",
    title: "Founder & CEO",
    image: "/images/team/nisha.jpeg",
    bio: "Visionary leader shaping unforgettable travel experiences.",
    bioLong:
      "Sarah founded DreamTravels with a belief that travel should inspire connection, discovery, and purpose. With over 15 years of experience in global hospitality, she continues to redefine luxury adventure through innovation and authenticity.",
    quote: "The journey is never just about where you go — it’s about who you become.",
    author: "Admin",
    createdAt: "2024-02-10",
    updatedAt: "2025-08-22",
  },
  {
    id: "2",
    name: "Jason Wickramasinghe",
    title: "Executive Manager",
    image: "/images/team/amara.jpeg",
    bio: "Bridging logistics and storytelling in every journey.",
    author: "Admin",
    createdAt: "2024-06-15",
  },
];
