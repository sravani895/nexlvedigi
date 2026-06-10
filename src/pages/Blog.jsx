import React from "react";
import { Link } from "react-router-dom";

export const Blog = () => {
  const projects = [
    {
      title: "NGO Donation Portal",
      category: "Social Impact",
      status: "Ongoing",
      image:
        "/images/ngo-donation.jpg",
      description:
        "A platform helping NGOs manage donations, volunteers, and fundraising campaigns efficiently.",
    },
    {
      title: "Education Learning Platform",
      category: "Education",
      status: "In Progress",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
      description:
        "Online learning portal with courses, quizzes, progress tracking, and certification.",
    },
    {
      title: "School Management System",
      category: "Education",
      status: "Testing",
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800",
      description:
        "Managing attendance, fees, student records, and communication between teachers and parents.",
    },
    {
      title: "Healthcare Awareness Website",
      category: "NGO Initiative",
      status: "Ongoing",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
      description:
        "Providing health awareness resources and connecting volunteers with communities.",
    },
  ];

  const trainings = [
    {
      title: "React JS Development",
      duration: "6 Weeks",
      level: "Beginner to Advanced",
    },
    {
      title: "Full Stack Development",
      duration: "12 Weeks",
      level: "Intermediate",
    },
    {
      title: "UIPath RPA Training",
      duration: "8 Weeks",
      level: "Professional",
    },
    {
      title: "Digital Marketing & SEO",
      duration: "4 Weeks",
      level: "Beginner",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Projects & Community Initiatives
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Driving innovation through technology, education, social impact,
            and skill development.
          </p>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Ongoing Projects
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Current initiatives helping organizations and communities grow.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <span className="text-sm font-semibold text-blue-600">
                  {project.category}
                </span>

                <h3 className="text-xl font-bold mt-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-3 text-sm">
                  {project.description}
                </p>

                <div className="mt-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NGO Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">
            NGO & Social Impact Initiatives
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gray-100 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">
                Empowering Communities
              </h3>

              <p className="text-gray-600">
                We collaborate with NGOs and social organizations to build
                digital platforms that increase awareness, simplify operations,
                and improve fundraising efforts.
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">
                Volunteer Management
              </h3>

              <p className="text-gray-600">
                Developing systems that connect volunteers with meaningful
                opportunities while helping organizations manage resources
                effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            Training Programs
          </h2>

          <p className="text-center text-gray-600 mb-12">
            Helping students and professionals build future-ready skills.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainings.map((course, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold mb-4">
                  {course.title}
                </h3>

                <p className="text-gray-600 mb-2">
                  Duration: {course.duration}
                </p>

                <p className="text-blue-600 font-semibold">
                  {course.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">
            Partner With Us
          </h2>

          <p className="text-lg mb-8">
            Whether you're an NGO, educational institution, startup, or
            enterprise, we're ready to help bring your vision to life.
          </p>

        <Link to="/contact">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Contact Us
            </button>
        </Link>
        </div>
      </section>
    </div>
  );
};