import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiFramer,
  SiGit,
} from "react-icons/si";
import {
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiJet,
} from "react-icons/si";

export const frontTechLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },

  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  { node: <SiRedux />, title: "Redux", href: "https://redux.js.org" },
  {
    node: <SiFramer />,
    title: "Framer Motion",
    href: "https://www.framer.com/motion/",
  },

  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
];

export const backendTechLogos = [
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com" },
  { node: <SiPrisma />, title: "Prisma", href: "https://www.prisma.io/" },
  {
    node: <SiPostgresql />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
  },
  { node: <SiJet />, title: "JWT", href: "https://jwt.io/" },
];
