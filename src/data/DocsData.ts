// Typy dla sidebarData
export type SidebarLink = {
  name: string;
  href: string;
};

export type SidebarSection = {
  title: string;
  links: SidebarLink[];
};

// Typy dla fixData
export type FixLink = {
  id: string;
  title: string;
  content: string;
  example?: string; // opcjonalne pole
};

export type FixSection = {
  title: string;
  link: FixLink[];
};

// Przykładowe użycie typów
export const sidebarData: SidebarSection[] = [
  {
    title: "Docs",
    links: [
      { name: "Introduction", href: "#intro" },
      { name: "Setup", href: "#setup" },
      { name: "Usage", href: "#usage" },
      { name: "API Reference", href: "#api" },
    ],
  },
  {
    title: "FrontEnd",
    links: [
      { name: "TypeScript", href: "#typescript" },
      { name: "Redux", href: "#redux" },
      { name: "React", href: "#react" },
      { name: "TailwindCSS", href: "#tailwindcss" },
      { name: "Framer Motion", href: "#framer-motion" },
    ],
  },
  {
    title: "BackEnd",
    links: [
      { name: "NodeJS", href: "#nodejs" },
      { name: "Express", href: "#express" },
      { name: "PostgreSQL", href: "#postgresql" },
      { name: "Prisma", href: "#prisma" },
    ],
  },
];

export const fixData: FixSection[] = [
  {
    title: "Docs",
    link: [
      {
        id: "intro",
        title: "Introduction",
        content: `Welcome to my documentation page — a place where I share details about myself as a web developer...`,
      },
      {
        id: "setup",
        title: "Setup",
        content: `My development environment is built around efficiency and scalability...`,
        example: ` <div className="bg-black/40 flex items-center text-2xl rounded text-gray-300 w-[80%] border border-gray-400 h-15 ">
                    <h1 className="pl-4">npm i</h1>
                    <span>|</span>
                  </div>`,
      },
      {
        id: "usage",
        title: "Usage",
        content: `This documentation is structured to give you insight into my full-stack workflow...`,
      },
      {
        id: "api",
        title: "API Reference",
        content: `I develop well-structured back-end APIs that follow REST standards...`,
      },
    ],
  },
  {
    title: "FrontEnd",
    link: [
      {
        id: "typescript",
        title: "TypeScript",
        content: `I use TypeScript to write clean, type-safe, and predictable code...`,
      },
      {
        id: "redux",
        title: "Redux Toolkit",
        content: `For state management, I use Redux Toolkit — a modern and simplified approach...`,
      },
      {
        id: "react",
        title: "React",
        content: `React is at the core of my front-end development...`,
      },
      {
        id: "tailwindcss",
        title: "Tailwind CSS",
        content: `I style my applications using Tailwind CSS for its utility-first approach...`,
      },
      {
        id: "framer-motion",
        title: "Framer Motion",
        content: `Framer Motion brings life to my interfaces...`,
      },
    ],
  },
  {
    title: "BackEnd",
    link: [
      {
        id: "nodejs",
        title: "Node.js",
        content: `I use Node.js for its performance, scalability, and versatility...`,
      },
      {
        id: "express",
        title: "Express",
        content: `Express is my go-to framework for server-side development...`,
      },
      {
        id: "postgresql",
        title: "PostgreSQL",
        content: `I use PostgreSQL as my main relational database because of its reliability...`,
      },
      {
        id: "prisma",
        title: "Prisma",
        content: `Prisma is my ORM of choice for Node.js and TypeScript...`,
      },
    ],
  },
];
