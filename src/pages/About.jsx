import React from "react";
import { motion } from "framer-motion";
import { DetailPage } from "./DetailPage";

export const About = () => {
  return (
    <section className="bg-gray-100 text-gray-900 py-20 px-6">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          About Us
        </motion.h1>

        <p className="mt-6 text-gray-600">
          We help businesses grow with AI-powered digital marketing and modern web solutions.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-10">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To empower businesses with innovative digital strategies that drive measurable growth.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To become a global leader in digital transformation through AI and marketing excellence.
          </p>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Founder</h2>
          <p className="text-gray-600">
            Mr Harshavardhan Reddy Chavali Venkata is a technology-driven entrepreneur 
            passionate about innovation, AI, and digital growth. With experience in 
            modern technologies and a strong vision for scaling businesses, he leads 
            the company with a focus on impact and results.
          </p>
        </motion.div>
      </div>
        <DetailPage />
    </section>
  );
};