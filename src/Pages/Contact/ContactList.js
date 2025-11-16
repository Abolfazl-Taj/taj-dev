import useTheme from "../../Hooks/useTheme";

const ContactList = ({ img, des }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`
        flex flex-col items-center justify-center 
        w-full md:w-[30%] h-60 p-6 rounded-2xl
        shadow-lg transition-all duration-300 ease-in-out
        hover:scale-105 hover:shadow-xl 
        ${isDark 
          ? "bg-[#111] text-gray-200 hover:shadow-red-900/40" 
          : "bg-white/80 text-gray-900 hover:shadow-red-950/30"}
      `}
    >
      <img
        src={img}
        alt={des}
        className="
          w-20 h-20 object-contain mb-4 opacity-90 
          hover:opacity-100 transition duration-300 ease-in-out
        "
      />
      <h1
        className={`
          text-xl font-semibold tracking-wide
          ${isDark ? "text-red-900" : "text-red-950"}
        `}
      >
        {des}
      </h1>
    </div>
  );
};

export default ContactList;
