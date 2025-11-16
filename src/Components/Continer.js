import Nav from "./NavBar/Nav";
import { motion } from "motion/react";
import useTheme from "../Hooks/useTheme";
const Continer = ({ className, children, wrapperClassName }) => {
  const { theme } = useTheme();
  return (
    <div className={`${className} flex   home h-screen`}>
      <div
        className={`${wrapperClassName}  w-[1400px] overflow-hidden flex flex-col gap-4 py-2  `}
      >
        <Nav />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7 }}
          className={`w-full min-h-full md:min-h-[600px] flex p-4 justify-around items-center
            backdrop-blur-2xl self-center 
               rounded-md border  ${
                 theme === "dark"
                   ? "border-white/10 bg-[#000]/40 backdrop-saturate-200 "
                   : " border-white bg-gray-100/40"
               } `}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default Continer;
