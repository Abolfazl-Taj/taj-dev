import Continer from "../../Components/Continer";
import useTheme from "../../Hooks/useTheme";

function Skills() {
  const skillCategories = [
    {
      title: "Basic Knowledge",
      skills: ["HTML", "CSS", "JavaScript", "SASS"],
    },
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python (Basic)"],
    },
    {
      title: "Database Technologies",
      skills: ["MongoDB", "PostgreSQL"],
    },
    {
      title: "Libraries",
      skills: ["React.js", "React Query", "Axios", "Swiper", "AOS", "etc…"],
    },
    {
      title: "Frameworks",
      skills: ["Next.js", "Tailwind CSS", "React Native", "etc…"],
    },
    {
      title: "ORM",
      skills: ["Prisma"],
    },
    {
      title: "Tools",
      skills: ["Docker"],
    },
    {
      title: "Version Control",
      skills: ["Git & GitHub"],
    },
  ];
  const { theme } = useTheme();
  const isDark = theme === "dark" 
  return (
    <Continer>
      <div className="flex flex-col gap-10  text-gray-200 p-12 rounded-2xl w-full">
        <h1 className={`text-4xl font-bold  text-center mb-8 ${isDark ? "text-red-600" : "text-gray-800"}`}>
          My Skills
        </h1>

        {/* Horizontal Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={` rounded-xl p-4 shadow-[0_0_15px_rgba(76,5,5,0.8)]
              ${isDark ? "bg-neutral-950" : "bg-white"}
              
              hover:shadow-[0_0_25px_rgba(127,29,29,0.9)] transition` }>
              <h2 className={`text-xl font-semibold text-red-800 mb-3 border-b border-red-900 pb-1 ${isDark ? "border-red-900 text-red-800" : "border-red-800"}`}>
                {category.title}
              </h2>
              <ul className={`space-y-1 ${isDark ? "text-gray-300" : "text-gray-500"}`}>
                {category.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className={`hover:text-red-300 transition tracking-wide `}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Continer>
  );
}

export default Skills;
