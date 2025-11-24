export interface TourPackage {
  id: string;           // now a string
  title: string;
  description: string;
  destination: string;
  departureDate: string;
  price: number;
  image: string;
  // Optional: you can add more fields here for detailed page
  itinerary?: string[];
  images?: string[];
  duration?: string;
}

export const tourPackages: TourPackage[] = [
  {
    id: "1",
    title: "Sri Lanka Beach Escape",
    description: "Relax on the pristine beaches of Sri Lanka with our all-inclusive package.",
    destination: "Sri Lanka",
    departureDate: "2025-12-15",
    price: 1200,
    image: "/package-images/srilanka-beach.jpg",
    duration: "5 Days / 4 Nights"
  },
  {
    id: "2",
    title: "Himalayan Adventure",
    description: "Experience the majestic Himalayas with guided trekking and cozy stays.",
    destination: "Nepal",
    departureDate: "2026-01-10",
    price: 2500,
    image: "/package-images/himalayas.jpeg",
    duration: "5 Days / 4 Nights"
  },
  {
    id: "3",
    title: "Maldives Luxury Resort",
    description: "Indulge in the turquoise waters and luxury resorts of Maldives.",
    destination: "Maldives",
    departureDate: "2026-02-20",
    price: 4000,
    image: "/package-images/maldives.jpg",
    duration: "5 Days / 4 Nights"
  },
  {
    id: "4",
    title: "Cultural Tour of Japan",
    description: "Explore the temples, gardens, and traditions of Japan with expert guides.",
    destination: "Japan",
    departureDate: "2026-03-05",
    price: 3500,
    image: "/package-images/japan.jpg",
    duration: "5 Days / 4 Nights"
  },
  {
    id: "5",
    title: "Safari in Kenya",
    description: "Witness wildlife in its natural habitat on a guided safari across Kenya.",
    destination: "Kenya",
    departureDate: "2026-04-12",
    price: 2800,
    image: "/package-images/kenya-safari.jpeg",
    duration: "5 Days / 4 Nights"
  },
];
