import { lazy, Suspense } from "react";

// ✅ WSZYSTKO DYNAMICZNIE
const BasicInfo = lazy(() => import("../components/BasicInfo"));
const Galaxy = lazy(() => import("@/components/Galaxy"));
const PurpleLine = lazy(() => import("@/components/ui/PurpleLine"));
const AboutMe = lazy(() => import("@/components/AboutMe"));
const Contact = lazy(() => import("@/components/Contact"));
const Skills = lazy(() => import("@/components/Skills"));
const Footer = lazy(() => import("@/components/Footer"));
const Navbar = lazy(() =>
  import("@/components/Navbar").then((module) => ({ default: module.Navbar }))
);
const Home = () => {
  return (
    <>
      <div className="fixed top-0 z-20 w-full">
        <Suspense fallback={null}>
          {" "}
          <Navbar />
        </Suspense>
      </div>
      <div className="relative min-h-screen flex  overflow-y-hidden overflow-x-hidden flex-col">
        <div className="fixed inset-0 -z-10">
          <div className="w-full h-full">
            <Suspense fallback={null}>
              {" "}
              <Galaxy />
            </Suspense>
          </div>{" "}
        </div>

        <main>
          <div>
            <div
              id="Home"
              className="flex justify-evenly h-[70vh] items-center p-10"
            >
              <Suspense fallback={null}>
                {" "}
                <BasicInfo />
              </Suspense>
            </div>
          </div>
          <section id="Projects">
            <Suspense fallback={null}>
              {" "}
              <PurpleLine />
            </Suspense>
          </section>
          <section id="Skills">
            <Suspense fallback={null}>
              {" "}
              <Skills />
            </Suspense>
          </section>
          <section id="About me">
            <Suspense fallback={null}>
              {" "}
              <AboutMe />
            </Suspense>
          </section>
          <section id="Contact">
            <Suspense fallback={null}>
              {" "}
              <Contact />
            </Suspense>
          </section>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Home;
