import { NavLink } from "react-router-dom";
import useTheme from "../../Hooks/useTheme";
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";

function Nav() {
  const { theme, ThemeHandler } = useTheme();
  const links = [
    { to: "/", label: "Home", icon: "fa-house" },
    { to: "/Interdouce", label: "Introduce", icon: "fa-user" },
    { to: "/Contact", label: "Contact", icon: "fa-envelope" },
    { to: "/Skills", label: "Skills", icon: "fa-code" },
    { to: "/Projects", label: "Projects", icon: "fa-briefcase" },
  ];

  const baseNav =
    "w-full flex items-center justify-between px-4 p-2 rounded-full z-5 transition-all duration-500 backdrop-blur-md border";

  const linkBase =
    "font-['Young_Serif'] font-bold mx-4 p-1 relative rounded after:content-[''] after:absolute after:bottom-0 after:left-0 after:scale-0 after:transition-all after:duration-500 after:w-full after:h-1 after:bg-red-900 after:rounded hover:after:scale-100";

  const activeLink =
    "!font-['Kanit'] font-black  scale-150";

  return (
    <>
      {/* --- Desktop Nav --- */}
      <div
        className={`${
          theme === "dark"
            ? `${baseNav} border-white/20 text-white`
            : `${baseNav} bg-white/50 border-gray-300 text-[#111] backdrop-blur-md`
        } hidden md:flex`}
      >
        <div className="flex-1 w-full p-2 h-full flex items-center">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive
                    ? `${activeLink} border-red-900 text-red-900`
                    : theme === "dark"
                    ? "text-white/70 hover:text-white"
                    : "text-[#111]/70 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <button
          className="px-4 text-2xl"
          onClick={() =>
            ThemeHandler(theme === "dark" ? "light" : "dark")
          }
        >
          {theme === "dark" ? <MdDarkMode className="text-red-800" /> : <FaSun className="text-white" />}
        </button>
      </div>

      {/* --- Mobile Bottom Nav --- */}
      <div
        className={`fixed md:hidden w-[90%] bottom-4 left-1/2 -translate-x-1/2 rounded px-4 py-2 flex justify-center items-center gap-4 border backdrop-blur-md backdrop-saturate-[55%] z-50 ${
          theme === "dark"
            ? "bg-[#111]/20 border-white/10 text-[#a1a1a1]"
            : "bg-white/30 border-gray-300 text-[#111]"
        }`}
      >
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex flex-col items-center text-xs transition-colors duration-300 ${
                isActive
                  ? `font-[Kanit] font-black scale-110 ${
                      theme === "dark" ? "text-white" : "text-red-900"
                    }`
                  : theme === "dark"
                  ? "text-white/50 hover:text-red-400 font-bold"
                  : "text-[#111]/50 hover:text-red-700 font-bold"
              }`
            }
          >
            <i className={`fa-solid ${link.icon} text-xl`}></i>
            {link.label}
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Nav;
