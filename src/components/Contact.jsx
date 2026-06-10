import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

export const Contact = () => {
  return (
    <section className="relative bg-gray-100 min-h-screen flex items-center px-6 py-16">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl font-bold text-gray-700">
            Get in touch<span className="text-black">.</span>
          </h1>

          <p className="mt-6 text-gray-500 max-w-md">
            Whether you have questions about our services, need support, 
            or want to share your feedback, our dedicated team is here 
            to assist you every step of the way.
          </p>

          {/* Contact Info */}
          <div className="mt-10 grid grid-cols-2 gap-6 text-gray-600">

            <div className="flex items-start gap-3">
              <FaEnvelope className="mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-sm">nexlvedigiprivatelimited@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaGlobe className="mt-1" />
              <div>
                <h4 className="font-semibold">Website</h4>
                <p className="text-sm">nexlvedigi.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaPhoneAlt className="mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-sm">+91 9912513206</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-sm">Kadapa, Andhra Pradesh</p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* RIGHT SIDE (FORM) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-2xl shadow-md"
        >
          <form className="flex flex-col gap-5">

            <input
              type="text"
              placeholder="Your Name"
              className="bg-gray-200 px-5 py-4 rounded-full outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="bg-gray-200 px-5 py-4 rounded-full outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="bg-gray-200 px-5 py-4 rounded-full outline-none"
            />

            <textarea
              rows="4"
              placeholder="Message"
              className="bg-gray-200 px-5 py-4 rounded-2xl outline-none"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-700 text-white py-3 rounded-full w-32"
            >
              Submit
            </motion.button>

          </form>
        </motion.div>

      </div>
    </section>
  );
};