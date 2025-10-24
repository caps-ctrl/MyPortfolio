import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { navData } from "../data/navData";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  // Obsługa scrolla dla tła navbaru
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll Spy - Intersection Observer
  useEffect(() => {
    const sections = navData.map((nav) => document.getElementById(nav.name));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% sekcji w widoku
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <motion.nav
      initial={{ backgroundColor: "rgba(0,0,0,0)" }}
      animate={{
        backgroundColor: scrolled ? "rgba(0,0,0,0.95)" : "rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.5 }}
      className="w-full p-4 fixed top-0 left-0 z-50"
    >
      <div className="flex justify-between px-[10rem]">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
          Marcel Gusiew
        </h1>

        <ul className="flex gap-6 text-yellow-500 font-bold">
          {navData.map((nav) => (
            <a key={nav.name} href={`#${nav.link}`}>
              <li className="relative cursor-pointer">
                {nav.name}
                <motion.span
                  className="absolute left-0 -bottom-1 h-[3px] bg-yellow-500"
                  initial={{ width: 0 }}
                  animate={
                    activeSection === nav.name
                      ? { width: "100%" }
                      : { width: 0 }
                  }
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </li>
            </a>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};
