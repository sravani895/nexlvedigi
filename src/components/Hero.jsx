import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-black text-white min-h-screen flex items-center px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            We Build Digital Experiences That Grow Your Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-gray-400 text-lg"
          >
            From AI-driven solutions to powerful marketing strategies,
            we help brands scale faster in the digital world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 flex gap-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8 flex gap-4"
            >
              {/* Get Started */}
              <motion.button
                onClick={() => navigate("/contact")}
                className="bg-white text-black px-6 py-3 rounded-full font-semibold"
                whileHover={{
                  scale: 1.08,
                  y: -2,
                  boxShadow: "0px 10px 25px rgba(255,255,255,0.2)",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Get Started
              </motion.button>

              {/* View Work */}
              <motion.button onClick={() => navigate("/blog")}
                className="border border-white px-6 py-3 rounded-full text-white"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#ffffff",
                  color: "#000000",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.3 }}
              >
                View Work
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1559028012-481c04fa702d"
            alt="Digital Marketing"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

      </div>

    </section>
  );
};