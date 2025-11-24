import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Metadata } from "next";
import ClientLoader from "./components/ClientLoader"; // client-only loader wrapper

export const metadata: Metadata = {
  title: "Dream Travels | Explore the World",
  description: "Travel agency website built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans relative bg-white">
        <Navbar />
        {/* Wrap main content with ClientLoader */}
        <ClientLoader>
          <main className="pt-20 min-h-screen transition-opacity duration-500 ease-out">
            {children}
          </main>
        </ClientLoader>
        <Footer />
      </body>
    </html>
  );
}
