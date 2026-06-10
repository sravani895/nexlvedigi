import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "SEO Optimization",
    desc: "Improve your search rankings and drive organic traffic.",
  },
  {
    title: "Social Media Marketing",
    desc: "Grow your brand presence across all platforms.",
  },
  {
    title: "Paid Advertising",
    desc: "Run high-converting Google & Meta ad campaigns.",
  },
  {
    title: "Web Development",
    desc: "Build fast, modern, and scalable websites.",
  },
  {
    title: "Email Marketing",
    desc: "Convert leads into customers with targeted campaigns.",
  },
  {
    title: "Analytics & Reporting",
    desc: "Track performance with real-time data insights.",
  },
];

export const ServicesDetail = () => {
  return (
    <section className="bg-gray-100 min-h-screen py-20 px-6">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
          Our Services
        </motion.h1>

        <p className="mt-4 text-gray-600">
          We provide end-to-end digital solutions to grow your business.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              {service.title}
            </h3>
            <p className="mt-3 text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-semibold text-gray-900">
          Ready to Grow Your Business?
        </h2>

        <Link to="/contact">
          <button className="mt-6 bg-black text-white px-6 py-3 rounded-full">
             Get Free Consultation
          </button>
        </Link>
      </div>

    </section>
  );
};