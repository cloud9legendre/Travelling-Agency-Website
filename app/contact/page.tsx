import Image from "next/image";
import { footerData } from "../data/footerData"; // adjust path if needed
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function ContactPage() {
    const {contact, socialLinks } = footerData;
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-sky-50/30 to-white py-24 px-6">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-sky-600 to-blue-800 bg-clip-text text-transparent drop-shadow-md">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-6 drop-shadow-sm">
          Have questions or want to collaborate? Reach out to us and we&apos;ll get back to you promptly.
        </p>
      </section>

      {/* Contact Content */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Contact Form */}
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl p-10 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-xl border border-gray-300 p-3 text-gray-900 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-xl border border-gray-300 p-3 text-gray-900 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="mt-1 block w-full rounded-xl border border-gray-300 p-3 text-gray-900 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                placeholder="Write your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-sky-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-10">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl p-10 border border-gray-100 flex flex-col items-start gap-6">
            <h2 className="text-2xl font-semibold text-gray-900">Our Office</h2>
            <p className="text-gray-700">
              {contact.address}
            </p>
            <p className="text-gray-700">📞 {contact.phone}</p>
            <p className="text-gray-700">✉️ {contact.email}</p>
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
          

          <div className="relative w-full h-64 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/contact-office.jpeg"
              alt="Office"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
