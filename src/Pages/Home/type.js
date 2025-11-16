import React from "react";
import Typed from "typed.js";
import useTheme from "../../Hooks/useTheme";

function Type() {
  const { theme } = useTheme();
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Welcome AT Site", "Web Developer" , "Abolfazl Taj"],
      typeSpeed: 50,
      loop: true,
      loopCount: 1,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
      fadeOut: true,
      fadeOutClass: "typed-fade-out",
      fadeOutDelay: 500,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      className={`
        text-center   tracking-wide 
        transition-colors duration-300 ease-in-out
        ${theme === "dark" ? "text-gray-200" : "text-red-950"}
      `}
    >
      <span ref={el} />
    </div>
  );
}

export default Type;
