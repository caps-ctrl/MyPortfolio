import { motion } from "framer-motion";
import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="bg-black border-t-4 border-gray-700 text-white py-8 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Logo / Nazwa */}
        <div className="text-emerald-300 font-bold text-xl">MyPortfolio</div>

        {/* Linki */}
        <div className="flex flex-col px-4 sm:flex-row gap-4">
          <a href="#Home">
            <h2 className="hover:text-emerald-300 cursor-pointer transition-colors">
              Home
            </h2>
          </a>
          <a href="#Projects">
            <h2 className="hover:text-emerald-300 cursor-pointer transition-colors">
              Projects
            </h2>
          </a>
          <a href="#About me">
            <h2 className="hover:text-emerald-300 cursor-pointer transition-colors">
              AboutMe
            </h2>
          </a>
          <a href="#Contact">
            <h2 className="hover:text-emerald-300 cursor-pointer transition-colors">
              Contact
            </h2>
          </a>
        </div>

        {/* Social Media */}
        <div className="flex gap-4 text-emerald-300 text-xl">
          <a
            href="https://github.com/caps-ctrl"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-gray-500 text-center mt-6 text-sm">
        &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
