"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/images/hero.jpg", "/images/hero2.jpg", "/images/hero3.jpg"];

const headlines = [
  { text: "未来を創造する、今。", subtext: "Creating Tomorrow, Today." },
  { text: "人とロボットの共生社会へ", subtext: "Harmony of Human and Machine" },
  { text: "技術革新の最前線から", subtext: "Leading the Tech Revolution" },
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* 画像スライドショー */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* テキストオーバーレイ */}
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-4xl font-bold text-white sm:text-6xl">
              {headlines[currentIndex].text}
            </h1>
            <p className="text-lg text-gray-200 sm:text-xl">
              {headlines[currentIndex].subtext}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
