import Projects from "../Projects";
import Skills from "../Skills";

const PurpleLine = () => {
  return (
    <div >
      <span className="bg-black absolute  bottom-screen left-1/2 -translate-x-1/2  aspect-[2.346820809248555/1] h-[956px]  rounded-t-[100%] shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff7d] "></span>{" "}
      
     <div className="p-4 "> <Projects /><Skills/></div>
     
         
    </div>
  );
};

export default PurpleLine;
