import { motion } from "framer-motion";
import React from "react";

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
      
     
      <motion.div
        className="absolute w-3 h-3 bg-yellow-500 rounded-full"
        animate={{ y: [0, -20, 0], x: [0, 10, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
        style={{ top: "20%", left: "10%" }}
      />
      <motion.div
        className="absolute w-2 h-2 bg-yellow-500 rounded-full"
        animate={{ y: [0, 15, 0], x: [0, -10, 10, 0] }}
        transition={{ duration: 1.7, repeat: Infinity, repeatType: "mirror" }}
        style={{ top: "70%", left: "80%" }}
      />
      <motion.div
        className="absolute w-2.5 h-2.5 bg-yellow-500 rounded-full"
        animate={{ y: [0, -15, 0], x: [0, 5, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        style={{ top: "50%", left: "50%" }}
      />

     
      <motion.h1
        className="text-yellow-500 text-4xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        Loading...
      </motion.h1>

      <motion.p
        className="text-white text-lg md:text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Please wait while we prepare your experience
      </motion.p>
    </div>
  );
};

export default LoadingScreen;
