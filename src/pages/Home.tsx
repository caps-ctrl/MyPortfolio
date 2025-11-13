import React from "react";
const BasicInfo = React.lazy(() => import("../components/BasicInfo"));
import Galaxy from "@/components/Galaxy";
const PurpleLine = React.lazy(() => import("@/components/ui/PurpleLine"));
const AboutMe = React.lazy(() => import("@/components/AboutMe"));
const Contact = React.lazy(() => import("@/components/Contact"));
const Skills = React.lazy(() => import("@/components/Skills"));
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <div className="fixed top-0 z-20 w-full">
        <Navbar />
      </div>
      <div className="relative min-h-screen flex  overflow-y-hidden overflow-x-hidden flex-col">
        <div className="fixed inset-0 -z-10">
          <div className="w-full h-full">
            <Galaxy />
          </div>{" "}
        </div>

        <main>
          <div>
            <div
              id="Home"
              className="flex justify-evenly h-[70vh] items-center p-10"
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
          <section id="About me">
            <AboutMe />
          </section>
          <section id="Contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
