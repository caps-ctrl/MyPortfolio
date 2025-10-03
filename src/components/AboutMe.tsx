import { motion } from "framer-motion";
import { FaBasketballBall, FaGamepad, FaDumbbell } from "react-icons/fa";
import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section className="relative bg-black text-white py-20 px-6 md:px-20 overflow-hidden">
      
      {/* Dekoracyjne żółte punkty */}
      <motion.div
        className="absolute top-0 left-0 w-1 h-1 bg-yellow-500 rounded-full animate-bounce opacity-20"
        style={{ top: "10%", left: "5%" }}
      />
      <motion.div
        className="absolute w-1 h-1 bg-yellow-500 rounded-full animate-bounce opacity-20"
        style={{ top: "40%", left: "80%" }}
        transition={{ delay: 0.5 }}
      />
      <motion.div
        className="absolute w-1 h-1 bg-yellow-500 rounded-full animate-bounce opacity-20"
        style={{ top: "70%", left: "20%" }}
        transition={{ delay: 1 }}
      />

      {/* Nagłówek */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-yellow-500 mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      {/* Tekst */}
      <motion.div
        className="max-w-4xl mx-auto text-lg md:text-xl space-y-6 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <p>
          My name is <span className="text-yellow-500 font-semibold">Marcel</span>, I am a 19-year-old Polish student of Computer Science at <span className="text-yellow-500 font-semibold">ZUT in Szczecin</span> and a passionate programmer. I learn quickly and I am determined to work hard to achieve success.
        </p>

        <p>
          I love solving challenging development problems and learning new things every day. Currently, I am focused on becoming a <span className="text-yellow-500 font-semibold">fullstack developer</span> and exploring new technologies that dominate the IT market.
        </p>

        <p>
          Outside of programming, I enjoy:
          <motion.span
            className="flex gap-4 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <FaBasketballBall className="text-yellow-500 text-2xl animate-bounce" />
            <FaGamepad className="text-yellow-500 text-2xl animate-bounce" />
            <FaDumbbell className="text-yellow-500 text-2xl animate-bounce" />
          </motion.span>
        </p>

        <p>
          I combine my studies, programming passion, and personal interests to continuously improve myself and contribute effectively to projects. Hard work, curiosity, and determination are my main strengths.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
