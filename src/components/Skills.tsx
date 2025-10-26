import { frontTechLogos, backendTechLogos } from "@/data/skillData";
import LogoLoop from "./LogoLoop";
const Skills = () => {
  return (
    <div className="relative bg-black text-white px-6 md:px-20 overflow-hidden space-y-16">
      {/* Front End Info */}
      <div>
        <h1 className="text-center text-3xl font-bold text-yellow-500">
          FrontEnd Skills:
        </h1>
        <div className="py-4">
          <span className="text-yellow-300/90">
            <LogoLoop
              logos={frontTechLogos}
              speed={50}
              direction="left"
              logoHeight={65}
              gap={45}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#e2b85cff"
              ariaLabel="Frontend technologies"
            />
          </span>
        </div>
      </div>

      {/* Back End Info */}
      <div>
        <h1 className="text-center text-3xl font-bold text-green-500">
          BackEnd Skills:
        </h1>
        <div className="py-4">
          <span className="text-green-300/90">
            <LogoLoop
              logos={backendTechLogos}
              speed={50}
              direction="right"
              logoHeight={65}
              gap={45}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#85e2b8ff"
              ariaLabel="Backend technologies"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;







