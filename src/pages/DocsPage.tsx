import { docsData, sidebarData } from "@/data/DocsData";
import { NavLink } from "react-router-dom";


const DocsPage = () => {


  

  return (
    <div className="flex bg-gray-800 pt-10 justify-between w-screen text-white">
      {/* Sidebar */}
      <aside
        style={{ boxShadow: "0 2px 20px -2px #34D399" }}
        className="w-55 ml-10 rounded-xl bg-gray-900 border-r border-gray-800 p-6 flex flex-col gap-4 fixed md:static z-50"
      >
        {sidebarData.map((section) => (
          <div key={section.title} id={section.title}>
            <h1 className="text-2xl text-center font-bold text-emerald-400">
              {section.title}
            </h1>
            <nav className="flex flex-col gap-2">
              {section.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={
                  
                       "hover:text-emerald-300 transition-colors"
                  }
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        ))}

        <NavLink to={"/"} className="mt-4">
          <button className="relative px-6 cursor-pointer py-3 font-semibold text-black bg-emerald-300 rounded-lg overflow-hidden group hover:text-white transition-all duration-300">
            <span className="absolute inset-0 bg-emerald-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            <span className="relative z-10">Home Page</span>
          </button>
        </NavLink>

        <div className="mt-auto text-sm text-gray-500">
          <p>© 2025 Marcel Docs</p>
        </div>
      </aside>

      {/* Main Content */}
      <div className="h-screen w-[70%] overflow-y-auto scrollbar-thin scrollbar-thumb-emerald-300 scrollbar-track-gray-800 scroll-smooth pr-4">
        <div className="max-w-[70%]">
          {docsData.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 py-4 flex-col"
            >
              <h2
                className={"text-3xl font-bold mb-4 text-emerald-300"
                }
              >
                {section.title}
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
