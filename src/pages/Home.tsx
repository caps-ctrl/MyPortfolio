import React from "react";
import { Navbar } from "@/components/Navbar";
const BasicInfo = React.lazy(() => import("../components/BasicInfo"));
const Galaxy = React.lazy(() => import("@/components/Galaxy"));
const PurpleLine = React.lazy(() => import("@/components/ui/PurpleLine"));
const AboutMe = React.lazy(() => import("@/components/AboutMe"));
const Contact = React.lazy(() => import("@/components/Contact"));
const Skills = React.lazy(() => import("@/components/Skills"));
const Home = () => {
  return (
    <div className="relative min-h-screen flex  overflow-x-hidden flex-col">
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full">
          <Galaxy />
        </div>{" "}
      </div>

      <main>
        <div>
          <div
            id="Home"
            className="flex justify-evenly h-[70vh] items-center  p-10"
          >
            <BasicInfo />
          </div>
        </div>
        <section id="Projects">
          <PurpleLine />
        </section>
        <section id="Skills">
          <Skills />
        </section>
        <section id="Aboutme">
          <AboutMe />{" "}
        </section>
        <section id="Contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Home;
