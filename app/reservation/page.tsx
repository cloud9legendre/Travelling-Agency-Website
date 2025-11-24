"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import { tourPackages, TourPackage } from "../data/tourPackages";
import { useSearchParams } from "next/navigation";

export default function ReservationPage() {
  const searchParams = useSearchParams();
  const packageIdFromQuery = searchParams?.get("package");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: packageIdFromQuery || "",
    guests: "1", // keep as string for controlled input
    message: "",
  });

  // Selected package
  const selectedPackage: TourPackage | null = useMemo(
    () => tourPackages.find((p) => p.id === formData.destination) || null,
    [formData.destination]
  );

  // Safe guests number
  const guestsNumber = parseInt(formData.guests) || 1;

  // Total price
  const rawTotalPrice = selectedPackage ? selectedPackage.price * guestsNumber : 0;

  // Animated total price
  const [animatedTotal, setAnimatedTotal] = useState(rawTotalPrice);
  const animatedTotalRef = useRef(animatedTotal);

  useEffect(() => {
    const start = animatedTotalRef.current;
    const end = rawTotalPrice;
    if (start === end) return;

    const duration = 400;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.round(start + (end - start) * progress);
      setAnimatedTotal(value);
      animatedTotalRef.current = value;
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [rawTotalPrice]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value === "" && name === "guests" ? "1" : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPackage) return alert("Please select a package!");
    alert(
      `Reservation submitted for ${selectedPackage.title}!\nGuests: ${guestsNumber}\nTotal Price: $${animatedTotal}`
    );
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-12">
      {/* Reservation Form */}
      <section className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 flex flex-col gap-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Book Your Trip</h2>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:outline-none text-gray-900"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:outline-none text-gray-900"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:outline-none text-gray-900"
          />

          {/* Package Dropdown */}
          <div className="flex flex-col">
            <label className="mb-2 text-gray-600 font-medium">Select Package</label>
            <select
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:outline-none bg-white text-gray-900"
            >
              <option value="">-- Choose a Package --</option>
              {tourPackages.map((pkg) => (
                <option key={pkg.id} value={pkg.id}>
                  {pkg.title}
                </option>
              ))}
            </select>
          </div>

          {/* Premium Package Card */}
          {selectedPackage && (
            <div className="relative bg-gray-50 rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row gap-4 p-6 border border-gray-200">
              <div className="relative h-48 md:h-auto md:w-1/3 flex-shrink-0 rounded-2xl overflow-hidden">
                <Image
                  src={selectedPackage.image}
                  alt={selectedPackage.title}
                  fill
                  className="object-cover object-center rounded-2xl"
                />
              </div>
              <div className="flex-1 flex flex-col gap-2 text-gray-800">
                <h3 className="text-xl font-semibold">{selectedPackage.title}</h3>
                <p className="text-gray-600 line-clamp-2">{selectedPackage.description}</p>
                <p>
                  <strong>Destination:</strong> {selectedPackage.destination}
                </p>
                <p>
                  <strong>Duration:</strong> {selectedPackage.duration}
                </p>
                <p>
                  <strong>Departure Date:</strong> {selectedPackage.departureDate}
                </p>
                <p>
                  <strong>Price per Guest:</strong> ${selectedPackage.price.toLocaleString()}
                </p>
                <p className="text-sky-600 font-bold text-lg">
                  <strong>Total Price:</strong> ${animatedTotal.toLocaleString()}
                </p>
              </div>
            </div>
          )}

          <label className="mb-1 text-gray-600 font-medium">Number of Guests</label>
          <input
            type="number"
            name="guests"
            min={1}
            value={formData.guests}
            onChange={handleChange}
            placeholder="Number of Guests"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:outline-none text-gray-900"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Additional Requests or Questions"
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:outline-none text-gray-900 resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-sky-600 text-white font-bold py-4 rounded-xl hover:bg-sky-700 transition-all duration-300 shadow-lg"
          >
            Confirm Reservation
          </button>
        </form>
      </section>
    </main>
  );
}
