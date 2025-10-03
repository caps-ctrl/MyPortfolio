import { motion } from "framer-motion";
import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Proste wysłanie wiadomości przez mailto
    const mailtoLink = `mailto:gusiew9@gmail.com?subject=Contact%20from%20${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(formData.message)}%0AFrom:%20${encodeURIComponent(formData.email)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative bg-black text-white py-20 px-6 md:px-20">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-yellow-500 mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>

      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
          />

          <button
            type="submit"
            className="bg-yellow-500 text-black font-bold py-3 px-6 rounded-md hover:bg-yellow-400 transition-colors"
          >
            Send Message
          </button>
        </form>

        {submitted && (
          <motion.p
            className="text-yellow-500 mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Your message is ready to be sent! Check your email client.
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;
