export const docsData = [
  // === DOCS ===
  {
    id: "intro",
    title: "Introduction",
    content: `Welcome to my documentation page — a place where I share details about
      myself as a web developer. Here you’ll learn about my journey, skills,
      technologies I specialize in, and the tools I use to bring modern web
      projects to life. This page serves as a personal developer
      documentation — a mix of a CV, tech stack overview, and portfolio
      insights.`,
  },
  {
    id: "setup",
    title: "Setup",
    content: `My development environment is built around efficiency and scalability.
      I primarily use React, Next.js, and TypeScript for front-end development,
      with Node.js and Express for the back-end. I manage databases through Prisma
      with PostgreSQL, and I use Git for version control. My workflow also includes
      Vite for fast builds, Tailwind CSS for styling, and Framer Motion for
      smooth, modern animations.`,
  },
  {
    id: "usage",
    title: "Usage",
    content: `This documentation is structured to give you insight into my full-stack
      workflow. Each section represents a part of my daily development process —
      from setting up the environment to managing state and styling UIs. You can
      navigate between front-end and back-end parts using the sidebar.`,
  },
  {
    id: "examples",
    title: "Examples",
    content: `Here are some examples of how I use different technologies together:
      React with Redux Toolkit for UI and state, Express with Prisma for APIs,
      and PostgreSQL for data management. I focus on modular, reusable code
      and maintain a consistent design system across projects.`,
  },
  {
    id: "api",
    title: "API Reference",
    content: `This section summarizes my back-end API structure and general
      conventions. I follow REST principles, use async handlers, and maintain
      clear, predictable responses for both client and server communication.`,
  },

  // === FRONTEND ===
  {
    id: "typescript",
    title: "TypeScript",
    content: `I use TypeScript to write clean, type-safe, and predictable code.
      Strong typing allows me to catch potential bugs early and improve
      developer experience. I rely heavily on interfaces, generics, and
      utility types to make my codebase more robust and maintainable.`,
  },
  {
    id: "redux",
    title: "Redux Toolkit",
    content: `For state management, I use Redux Toolkit — a modern and simplified
      approach to handling global state in React applications. I structure slices
      for modularity and use async thunks for efficient API interactions.`,
  },
  {
    id: "react",
    title: "React",
    content: `React is at the core of my front-end development. I focus on building
      component-driven UIs using hooks, context, and functional components.
      I value performance optimization techniques like memoization and
      dynamic imports to ensure smooth and fast user experiences.`,
  },
  {
    id: "tailwindcss",
    title: "Tailwind CSS",
    content: `I style my applications using Tailwind CSS for its utility-first
      approach and design consistency. It helps me build responsive layouts
      quickly while maintaining a clean and scalable design system.`,
  },
  {
    id: "framer-motion",
    title: "Framer Motion",
    content: `Framer Motion brings life to my interfaces. I use it to create fluid
      transitions, micro-interactions, and dynamic effects that improve UX without
      compromising performance.`,
  },

  // === BACKEND ===
  {
    id: "nodejs",
    title: "Node.js",
    content: `I use Node.js for its performance, scalability, and versatility in
      full-stack development. Its non-blocking architecture makes it perfect for
      handling multiple requests efficiently, ideal for APIs and real-time apps.`,
  },
  {
    id: "express",
    title: "Express",
    content: `Express is my go-to framework for server-side development. I use it
      to build robust REST APIs with middleware-based logic, route management,
      and structured error handling. It’s lightweight, flexible, and integrates
      perfectly with Prisma and PostgreSQL.`,
  },
  {
    id: "postgresql",
    title: "PostgreSQL",
    content: `I use PostgreSQL as my main relational database because of its
      reliability and strong SQL capabilities. I design normalized schemas and
      optimize queries for performance and data integrity.`,
  },
  {
    id: "prisma",
    title: "Prisma",
    content: `Prisma is my ORM of choice for Node.js and TypeScript.
      It simplifies database operations with type safety, schema migrations,
      and clear query structures. It integrates seamlessly with PostgreSQL
      and makes working with databases much more efficient.`,
  },
];


export const sidebarData = [
  {
    title: "Docs",
    links: [
      { name: "Introduction", href: "#intro" },
      { name: "Setup", href: "#setup" },
      { name: "Usage", href: "#usage" },
      { name: "Examples", href: "#examples" },
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
