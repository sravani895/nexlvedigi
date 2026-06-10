import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <footer ref={ref} className="bg-gray-100 pt-10">
      
      <motion.div
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-8 pt-6 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
      >
        
        {/* Logo + Address */}
        <div>
          <h1 className="text-3xl font-bold mb-6 tracking-wide">
            NEXLVEDIGI
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Revenue Ward 101,<br />
            Swamy Nagar,<br />
            Kadapa, Andhrapradesh, India<br />
            516004
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Social</h3>
          <p className="mb-3">+919912513206</p>
          <p className="mb-6">nexlvedigiprivatelimited@gmail.com</p>

          <div className="flex gap-6 text-xl">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.1 }}
                className="cursor-pointer"
              >
                <Icon />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-gray-700">
            {["Services", "Blog"].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 8 }}
                className="cursor-pointer"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

       {/* Map */}
<div>
  <h3 className="text-lg font-semibold mb-6">Our Location</h3>

  <div className="w-full h-55 rounded-lg overflow-hidden shadow-md">
    <iframe
      src="https://maps.google.com/maps?q=Kadapa%20Andhra%20Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
      className="w-full h-full border-0"
      loading="lazy"
    ></iframe>
  </div>
</div>

      </motion.div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300 px-8 py-6 text-sm text-gray-700 flex flex-col md:flex-row justify-between items-center">
        <p>© 2026 | All Rights Reserved | NEXLVEDIGI Private Limited</p>

        {/* Scroll to top */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full cursor-pointer mt-4 md:mt-0"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </motion.div>
      </div>

    </footer>
  );
};