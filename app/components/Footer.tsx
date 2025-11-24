import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { footerData } from "../data/footerData"; // adjust path if needed

export default function Footer() {
  const { companyName, tagline, quickLinks, contact, socialLinks } = footerData;

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* About */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-3">
            {companyName.slice(0, 5)}
            <span className="text-sky-500">{companyName.slice(5)}</span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">{tagline}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4 relative after:content-[''] after:block after:w-12 after:h-[2px] after:bg-sky-500 after:mt-2">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-sky-400 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4 relative after:content-[''] after:block after:w-12 after:h-[2px] after:bg-sky-500 after:mt-2">
            Newsletter
          </h2>
          <p className="text-sm text-gray-400 mb-3">
            Subscribe to receive exclusive travel deals and updates.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
            <button
              type="submit"
              className="px-4 bg-sky-600 hover:bg-sky-700 rounded-r-md text-white transition"
            >
              Join
            </button>
          </form>
        </div>

        {/* Contact & Social */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4 relative after:content-[''] after:block after:w-12 after:h-[2px] after:bg-sky-500 after:mt-2">
            Contact
          </h2>
          <ul className="text-sm space-y-2 mb-4">
            <li>Email: {contact.email}</li>
            <li>Phone: {contact.phone}</li>
            <li>Address: {contact.address}</li>
          </ul>

          <div className="flex space-x-4 mt-3">
            <a href={socialLinks.facebook} className="p-2 bg-gray-800 hover:bg-sky-600 rounded-full transition-colors">
              <FaFacebookF className="text-white" />
            </a>
            <a href={socialLinks.instagram} className="p-2 bg-gray-800 hover:bg-sky-600 rounded-full transition-colors">
              <FaInstagram className="text-white" />
            </a>
            <a href={socialLinks.twitter} className="p-2 bg-gray-800 hover:bg-sky-600 rounded-full transition-colors">
              <FaTwitter className="text-white" />
            </a>
            <a href={socialLinks.youtube} className="p-2 bg-gray-800 hover:bg-sky-600 rounded-full transition-colors">
              <FaYoutube className="text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-gray-300 font-semibold">{companyName}</span>. All rights reserved.
      </div>
    </footer>
  );
}
