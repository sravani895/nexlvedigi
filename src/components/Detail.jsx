import React from "react";
import { motion } from "framer-motion";

import {
  FaRobot,
  FaBullhorn,
  FaSearch,
  FaChartLine,
  FaLaptopCode,
  FaEnvelope,
  FaShoppingCart,
  FaCloud,
} from "react-icons/fa";

import { MdWeb, MdSocialDistance } from "react-icons/md";

const industries = [
  { name: "Artificial Intelligence", icon: FaRobot },
  { name: "Social Media", icon: MdSocialDistance },
  { name: "Web Design", icon: MdWeb },
  { name: "SEO Optimization", icon: FaSearch },
  { name: "Analytics", icon: FaChartLine },
  { name: "Development", icon: FaLaptopCode },
  { name: "Email Marketing", icon: FaEnvelope },
  { name: "E-commerce", icon: FaShoppingCart },
  { name: "Advertising", icon: FaBullhorn },
  { name: "Cloud Services", icon: FaCloud },
];

export const Detail = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      
      {/* ✅ Heading FIRST */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold">
          What We Provide
        </h2>
      </div>

      {/* ✅ Grid AFTER */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 text-center">
        {industries.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.15 }}
              className="flex flex-col items-center gap-3 cursor-pointer"
            >
              <div className="text-4xl">
                <Icon />
              </div>

              <p className="text-sm">{item.name}</p>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
};