import { useEffect, useState } from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme"); 
  });

  const ThemeHandler = (value) => {
    setTheme(value);
    localStorage.setItem("theme", value);
  };

  useEffect(() => {
    if (!theme) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      setTheme(systemTheme);
      localStorage.setItem("theme", systemTheme);
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, ThemeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
