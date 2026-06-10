import React from "react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

export const Services = () => {
  const services = [
    {
      title: "Digital Marketing",
      desc: "Grow your business with data-driven strategies.",
      icon: "🚀",
    },
    {
      title: "Artificial Intelligence",
      desc: "Automate and optimize using AI solutions.",
      icon: "🤖",
    },
    {
      title: "SEO Optimization",
      desc: "Boost your website ranking on Google.",
      icon: "📈",
    },
    {
      title: "Social Media",
      desc: "Engage and grow your audience online.",
      icon: "📱",
    },
    {
      title: "Content Creation",
      desc: "Create content that converts users.",
      icon: "✍️",
    },
    {
      title: "Web Development",
      desc: "Build fast and modern websites.",
      icon: "🌐",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        
        {/* 🔹 Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="text-gray-600 mt-2">
            Explore what we offer
          </p>
        </div>

        {/* 🔹 Swiper Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center h-full">
                
                <div className="text-4xl mb-4">{service.icon}</div>

                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  {service.desc}
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};