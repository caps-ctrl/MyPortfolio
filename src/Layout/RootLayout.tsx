import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
const RootLayout = () => {
  return (
    <div>
      <div className="fixed top-0 z-20 w-full">
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
