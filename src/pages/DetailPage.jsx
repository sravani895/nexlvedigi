import { motion } from "framer-motion";

const data = [
  {
    title: "Who We Are",
    desc: "We are a digital-first company focused on AI and growth.",
  },
  {
    title: "What We Do",
    desc: "We provide marketing, development, and AI solutions.",
  },
  {
    title: "Why Choose Us",
    desc: "We deliver measurable results using data-driven strategies.",
  },
];

export const DetailPage = () => {
  return (
   <section className="pt-20 pb-6 bg-gray-100">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Why We Stand Out
        </motion.h2>
      </div>

      {/* Circles */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 text-center">

        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{
              scale: 1.08,
              y: -5,
            }}
            className="flex flex-col items-center"
          >
            {/* Circle */}
            <div className="w-40 h-40 rounded-full bg-gray-900 text-white flex items-center justify-center p-6 shadow-lg">
              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>
            </div>

            {/* Description */}
            <p className="mt-6 text-gray-600 max-w-xs">
              {item.desc}
            </p>
          </motion.div>
        ))}

      </div>

    </section>
  );
};