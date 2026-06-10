import { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export const Preloader = ({ onComplete }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete(); // 🔥 tell App to remove loader
      },
    });

    tl.fromTo(
      ".char",
      { y: "100%" },
      {
        y: "0%",
        duration: 1,
        stagger: 0.08,
        ease: "power4.out",
      }
    );
  }, [onComplete]);

  const text = "NEXLVEDIGI".split("");

  return (
    <motion.div
      className="preloader"
      initial={{ y: 0 }}
      exit={{
        y: "-100%",
        transition: { duration: 1, ease: "easeInOut" },
      }}
    >
      <h1 className="loader-text">
        {text.map((char, i) => (
          <span className="mask" key={i}>
            <span className="char">{char}</span>
          </span>
        ))}
      </h1>
    </motion.div>
  );
};