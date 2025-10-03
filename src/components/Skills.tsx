import { motion } from "framer-motion";
import { FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiReactrouter, SiRedux, SiTypescript, SiFramer, SiVitest, SiNextdotjs, SiNestjs, SiMongodb, SiExpress } from "react-icons/si";
import { PiWebcamLight } from "react-icons/pi"; 
import { TbComponents } from "react-icons/tb"; 
import React from "react";

interface Skill {
  id: number;
  name: string;
  icon: React.ReactNode;
}

interface SkillRowProps {
  items: Skill[];
  direction?: "left" | "right";
  duration?: number;
  fade?: boolean;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { id: 1, name: "TailwindCSS", icon: <SiTailwindcss /> },
    { id: 2, name: "React", icon: <FaReact /> },
    { id: 3, name: "React Router", icon: <SiReactrouter /> },
    { id: 4, name: "shadcn/ui", icon: <TbComponents /> },
    { id: 5, name: "Redux Toolkit", icon: <SiRedux /> },
    { id: 6, name: "TypeScript", icon: <SiTypescript /> },
    { id: 7, name: "Responsive Web Design", icon: <PiWebcamLight /> },
    { id: 8, name: "Framer Motion", icon: <SiFramer /> },
    { id: 9, name: "Vitest", icon: <SiVitest /> },
    { id: 10, name: "Git", icon: <FaGitAlt /> },
  ];

  const futureSkills: Skill[] = [
    { id: 1, name: "Node.js", icon: <FaNodeJs /> },
    { id: 2, name: "Next.js", icon: <SiNextdotjs /> },
    { id: 3, name: "Express.js", icon: <SiExpress /> },
    { id: 4, name: "NestJS", icon: <SiNestjs /> },
    { id: 5, name: "MongoDB", icon: <SiMongodb /> },
  ];

  const SkillRow: React.FC<SkillRowProps> = ({ items, direction = "left", duration = 20, fade = false }) => {
    const repeatedItems = [...items, ...items];

    return (
      <div className={`relative overflow-hidden w-full ${fade ? "mask-fade" : ""}`}>
        <motion.div
          className="flex gap-20"
          animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration }}
        >
          {repeatedItems.map((skill, i) => (
            <div key={i} className="flex items-center min-w-fit">
              <div className="text-4xl text-yellow-500 mr-4">{skill.icon}</div>
              <span className="text-white text-xl whitespace-nowrap">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <div className="relative space-y-10">
      <h1 className="text-white text-3xl font-bold text-center mb-6">My Skills</h1>

      <SkillRow items={skills} direction="left" duration={20} fade />
      <SkillRow items={skills} direction="right" duration={25} fade />

      <div>
        <h2 className="text-yellow-500 text-center font-bold text-2xl pb-2">In Progress</h2>
        <SkillRow items={futureSkills} direction="left" duration={18} fade />
      </div>
    </div>
  );
};

export default Skills;
