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

// Dane do paska bocznego (bez zmian)
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

// ZAKTUALIZOWANE DANE GŁÓWNE
export const fixData: FixSection[] = [
  {
    title: "Docs",
    link: [
      {
        id: "intro",
        title: "Introduction",
        content: `Welcome to my documentation page. This isn't just a portfolio; it's an interactive look into my skills, methodologies, and the technologies I use. Here, I've documented the key concepts and tools I leverage to build modern web applications.`,
      },
      {
        id: "setup",
        title: "Setup",
        content: `My development environment is built around efficiency and scalability, utilizing Vite for rapid front-end bundling and Node.js for the back-end. You can clone any of my projects and start with a simple command:`,
        example: `npm i`,
      },
      {
        id: "usage",
        title: "Usage",
        content: `Use the sidebar to navigate through different sections. 'FrontEnd' and 'BackEnd' categories contain specific details and code examples for each technology I specialize in. Click any link to scroll directly to that topic.`,
      },
      {
        id: "api",
        title: "API Reference",
        content: `I develop well-structured back-end APIs that follow REST standards. My APIs are typically built with Node.js/Express and TypeScript, using Prisma as the ORM to interact with a PostgreSQL database. Here's a typical endpoint structure:`,
        example: `// GET /api/products/:id
{
  "id": 123,
  "name": "Laptop",
  "price": 1299.99,
  "inStock": true
}`,
      },
    ],
  },
  {
    title: "FrontEnd",
    link: [
      {
        id: "typescript",
        title: "TypeScript",
        content: `I use TypeScript in all my React projects to write clean, type-safe, and predictable code. It helps catch errors during development, improves code readability, and makes refactoring and scaling applications much safer and easier.`,
        example: `interface User {
  id: number;
  username: string;
  email?: string;
}`,
      },
      {
        id: "redux",
        title: "Redux Toolkit",
        content: `For complex state management, I use Redux Toolkit. It simplifies Redux logic significantly with utilities like createSlice, which automatically generates action creators and reducers, reducing boilerplate and preventing common mistakes.`,
        example: `const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});`,
      },
      {
        id: "react",
        title: "React",
        content: `React is at the core of my front-end development. I leverage its component-based architecture and hooks (like useState, useEffect, useContext) to build reusable, declarative, and interactive user interfaces.`,
        example: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`,
      },
      {
        id: "tailwindcss",
        title: "Tailwind CSS",
        content: `I style my applications using Tailwind CSS for its utility-first approach. It allows me to rapidly build custom designs directly in my JSX, without leaving my HTML or writing separate CSS files, ensuring consistency and maintainability.`,
        example: `<div className="p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
  Click me
</div>`,
      },
      {
        id: "framer-motion",
        title: "Framer Motion",
        content: `Framer Motion brings life to my interfaces. I use this declarative animation library to create fluid transitions, complex micro-interactions, and engaging user experiences with minimal and easy-to-read code.`,
        example: `<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
/>`,
      },
    ],
  },
  {
    title: "BackEnd",
    link: [
      {
        id: "nodejs",
        title: "Node.js",
        content: `I use Node.js for its performance, scalability, and non-blocking I/O model. It's my runtime of choice for building fast and efficient server-side applications, from RESTful APIs to real-time services.`,
        example: `const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello, World!');
});

server.listen(3000);`,
      },
      {
        id: "express",
        title: "Express",
        content: `Express is my go-to framework for server-side development with Node.js. Its minimalist and flexible nature makes it perfect for quickly scaffolding robust APIs, handling routing, and managing middleware.`,
        example: `const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  res.json({ users: [...] });
});

app.listen(3000);`,
      },
      {
        id: "postgresql",
        title: "PostgreSQL",
        content: `I use PostgreSQL as my main relational database because of its reliability, advanced features, and strong adherence to SQL standards. It's perfect for applications requiring data integrity and complex queries.`,
        example: `SELECT * FROM "Product"
WHERE category = 'Electronics'
ORDER BY "createdAt" DESC;`,
      },
      {
        id: "prisma",
        title: "Prisma",
        content: `Prisma is my ORM of choice for Node.js and TypeScript. It provides a next-generation, type-safe database client that streamlines database access, migrations, and schema management, allowing me to write more robust and maintainable back-end code.`,
        example: `const users = await prisma.user.findMany({
  where: {
    role: 'ADMIN',
  },
});`,
      },
    ],
  },
];
