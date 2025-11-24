"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function ClientLoader({ children }: Props) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setLoading(true), 50);
    const hideTimer = setTimeout(() => setLoading(false), 3000); // Minimum loader duration

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [pathname]);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/90 backdrop-blur-md">
          {/* Animated Globe */}
          <motion.div
            className="w-24 h-24 rounded-full border-4 border-sky-500 border-t-transparent shadow-lg"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />

          {/* Shimmer Text */}
          <motion.div
            className="mt-6 text-2xl font-bold text-sky-700 uppercase tracking-wider bg-gradient-to-r from-sky-500 via-blue-600 to-sky-500 bg-clip-text text-transparent"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          >
            Loading your adventure...
          </motion.div>

          {/* Optional shimmer bar */}
          <motion.div
            className="relative w-48 h-2 mt-4 bg-sky-200 rounded-full overflow-hidden"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </motion.div>
        </div>
      )}
      {children}
    </>
  );
}
