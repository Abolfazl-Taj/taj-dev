import useTheme from "../../Hooks/useTheme";

function Socials({ icon }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      className="
        group relative w-[14%] md:w-1/4 h-[45px] flex items-center justify-center 
        overflow-hidden rounded-md cursor-pointer 
        transition-all duration-300 ease-in-out my-[25px] 
        max-[320px]:mx-1 max-[768px]:mx-2
        hover:scale-105
      "
    >
      <span
        className={`
          w-full h-full flex items-center justify-center bg-transparent 
          backdrop-blur-sm tracking-[0.8px] rounded-[10px] 
          transition-all duration-300 ease-in-out border 
          ${isDark ? "border-[rgba(156,156,156,0.466)] group-hover:bg-red-950/20"
                   : "border-red-950/40 group-hover:bg-red-950/20"}
        `}
      >
        {icon}
      </span>

      <span
        className={`
          absolute inset-0 -z-10 rounded-lg pointer-events-none 
          transition-all duration-300 ease-in-out origin-bottom 
          group-hover:rotate-[35deg] 
          ${isDark 
            ? "bg-gradient-to-br from-red-950 to-[#111]" 
            : "bg-red-950"}
        `}
      ></span>
    </button>
  );
}
export default Socials;
