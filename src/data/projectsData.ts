export interface Project {
  id: number;
  title: string;
  Photo: string;
  PhotoDark: string;
  link: string;
  description: string;
  technologies: (
    | "React"
    | "TypeScript"
    | "React Router"
    | "Redux Toolkit"
    | "TailwindCSS"
    | "shadcn/ui"
    | "Framer Motion"
    | "Vitest testy jednostkowe"
    | "Zod"
    | "React Hook Form"
    | "local Storage"
    | "FETCH"
    | "Next.js API Routes"
    | "Prisma"
    | "PostgreSQL"
  )[];
  GitHub: string;
}

interface ProjectState {
  Projects: Project[];
}

export const projects: ProjectState = {
  Projects: [
    {
      id: 1,
      title: "AI Notes",
      Photo: "ainotes.jpg",
      PhotoDark: "AiNotesDark.png",
      link: "https://ainote-nu.vercel.app",
      description:
        "AI Notes is an intelligent notebook powered by artificial intelligence that helps users organize ideas, generate content, and analyze text in real time.",
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "shadcn/ui",
        "Framer Motion",
        "Zod",
        "React Hook Form",
        "Next.js API Routes",
      ],
      GitHub: "https://github.com/caps-ctrl/ainotes",
    },
    {
      id: 2,
      title: "Quiz App",
      Photo: "Quizphoto.png",
      PhotoDark: "QuizphotoDark.png",
      link: "https://quizgame-blue.vercel.app/",
      description:
        "Quiz fetching dynamic questions from an API, saving scores to localStorage and managing state globally via React Context API.",
      technologies: [
        "React",
        "TailwindCSS",
        "TypeScript",
        "Vitest testy jednostkowe",
        "FETCH",
        "local Storage",
        "Framer Motion",
        "React Router",
      ],
      GitHub: "https://github.com/caps-ctrl/quizgame",
    },
    {
      id: 3,
      title: "E-Commerce Shop",
      Photo: "EComerceShop.png",
      PhotoDark: "EComerceShopDark.png",
      link: "https://moje-cv-ecomerceshop.vercel.app/",
      description:
        "E-commerce platform with product browsing, global state via Redux, and fully functional backend handling authentication, database operations, and product management using Next.js API Routes, Prisma, and PostgreSQL.",
      technologies: [
        "React",
        "Redux Toolkit",
        "shadcn/ui",
        "TailwindCSS",
        "TypeScript",
        "Zod",
        "React Hook Form",
        "React Router",
        "Next.js API Routes",
        "Prisma",
        "PostgreSQL",
      ],
      GitHub: "https://github.com/caps-ctrl/eComerceShop",
    },
  ],
};
