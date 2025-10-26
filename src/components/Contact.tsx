import { motion } from "framer-motion";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ContactPhone: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:gusiew9@gmail.com?subject=Contact%20from%20${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(formData.message)}%0AFrom:%20${encodeURIComponent(formData.email)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (<>
    <section className="flex justify-center  text-center min-h-screen  py-10 px-4">
      {/* Telefon */}
      <motion.div
        className="relative w-72 sm:w-80 md:w-96 bg-black rounded-3xl border-4 border-gray-700 shadow-xl p-6 flex flex-col"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Głośnik i kamera telefonu */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-1.5 bg-gray-600 rounded-full"></div>
        </div>
        <div className="flex justify-end mb-4">
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        </div>

        {/* Nagłówek */}
        <motion.h2
          className="text-2xl font-bold text-center text-emerald-300 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        {/* Formularz */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300 resize-none"
          />

          <button
            type="submit"
            className="bg-emerald-300 text-black font-bold py-2 rounded-lg hover:bg-emerald-200 transition-colors"
          >
            Send Message
          </button>
        </motion.form>

        {submitted && (
          <motion.p
            className="text-emerald-300 mt-4 text-center text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Your message is ready to be sent! Check your email client.
          </motion.p>
        )}
         <h2 className="text-2xl sm:text-3xl p-4 flex justify-center font-bold text-emerald-100 text-center sm:text-left">
          Wanna see more?
        </h2>

        <div className="flex justify-center">
          
        <NavLink to={"docs"}>  <a
            href="#docs"
            className="bg-emerald-300 text-black font-semibold py-2 px-4 rounded-md hover:bg-emerald-400 transition-colors text-center"
          >
            Check Docs
          </a></NavLink>
        </div>
      </motion.div>
       
      
    </section></>
  );
};

export default ContactPhone;
