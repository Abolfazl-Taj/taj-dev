import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("⚡ ThemeContext is missing! you fucked up DEV");
  }

  return context;
};

export default useTheme;
