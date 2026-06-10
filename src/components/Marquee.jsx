import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export const MarqueeSection = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);

  const items = [
    "🚀 Digital Marketing",
    "🤖 Artificial Intelligence",
    "📊 Data Analytics",
    "💡 SEO Optimization",
    "📱 Social Media Marketing",
    "🌐 Web Development",
  ];

  const repeatedItems = [...items, ...items, ...items]; // 🔥 more repetition

  useEffect(() => {
    const scrollWidth = containerRef.current.scrollWidth / 2;

    controls.start({
      x: -scrollWidth,
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <div className="overflow-hidden bg-black py-4 mt-10">
      <motion.div
        ref={containerRef}
        className="flex w-max text-white text-lg font-semibold"
        animate={controls}
      >
        {repeatedItems.map((text, index) => (
          <span key={index} className="mx-8 whitespace-nowrap">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};