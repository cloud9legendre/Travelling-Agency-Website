export interface Destination {
  id: string;
  cityName: string;
  image: string;
  description: string;
  shortDescription: string;
  author: string;
  createdAt: string;
  updatedAt?: string; // only for admin
  tagline?: string; // short one-liner summary for hero section
  highlights?: string[]; // key attractions or experiences
  rating?: number; // optional rating for future use
}

export const destinations: Destination[] = [
  {
    id: "1",
    cityName: "Kandy",
    image: "/images/destinations/kandy.jpg",
    description:
      "Nestled in Sri Lanka's central highlands, Kandy is a cultural gem known for the Temple of the Tooth, lush hills, and serene lake views. The city's colonial charm blends seamlessly with its vibrant Buddhist traditions, offering a deeply immersive experience of Sri Lanka's heritage.",
    author: "Admin",
    
    shortDescription: "A tropical paradise of beaches, temples, and rice terraces.",
    createdAt: "2025-10-15",
    updatedAt: "2025-10-30",
    tagline: "The cultural heart of Sri Lanka — where tradition meets tranquility.",
    highlights: [
      "Temple of the Sacred Tooth Relic",
      "Kandy Lake evening walks",
      "Peradeniya Botanical Gardens",
      "Esala Perahera Festival",
    ],
    rating: 4.8,
  },
  {
    id: "2",
    cityName: "Galle",
    image: "/images/destinations/galle.jpeg",
    description:
      "A stunning coastal city with colonial Dutch architecture, charming cafes, and picturesque ocean views inside the historic Galle Fort. Galle offers a unique fusion of old-world charm and modern coastal relaxation — ideal for culture lovers and sunset chasers alike.",
    author: "Editor",
    shortDescription: "The city of lights — romance, art, and timeless beauty.",
    createdAt: "2025-10-18",
    tagline: "A living postcard of Sri Lanka’s southern coast.",
    highlights: [
      "Galle Dutch Fort and lighthouse",
      "Oceanfront cafes and boutiques",
      "Unawatuna Beach snorkeling",
      "Scenic coastal sunsets",
    ],
    rating: 4.7,
  },
];
