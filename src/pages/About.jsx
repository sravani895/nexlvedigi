import React from "react";
import { motion } from "framer-motion";
const teamMembers = [
  {
    name: "Harshavardhan Reddy Chavali Venkata",
    role: "Founder & CEO",
    image: "/images/founder.jpg",
    description: "Technology entrepreneur passionate about AI and innovation.",
  },
  {
    name: "Sravani",
    role: "Lead Developer",
    image: "/images/developer.jpg",
    description: "Lead developer focused on creating modern user experiences.",
  },
  {
    name: "John Doe",
    role: "Backend Developer",
    image: "/images/backend.jpg",
    description: "Specializes in Node.js, APIs, and cloud infrastructure.",
  }
];

export const About = () => {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="mt-4 text-gray-600">
            We help businesses grow with AI-powered digital marketing and
            modern web solutions.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">
          <div>
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="mt-3 text-gray-600">
              To empower businesses with innovative digital strategies that
              drive measurable growth.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p className="mt-3 text-gray-600">
              To become a global leader in digital transformation through AI
              and marketing excellence.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            Meet Our Team
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-blue-600 font-medium">
                    {member.role}
                  </p>
                  <p className="mt-3 text-gray-600 text-sm">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};