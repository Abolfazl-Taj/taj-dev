import Type from "./type.js";
import "./Home.css";
import Socials from "./Socials";
import Continer from "../../Components/Continer.js";
import useTheme from "../../Hooks/useTheme.js";

function Home() {
  let socials = [
    { icon: <i class="fa-brands fa-instagram"></i> },
    { icon: <i class="fa-brands fa-telegram"></i> },
    { icon: <i class="fa-brands fa-linkedin"></i> },
    { icon: <i class="fa-brands fa-discord"></i> },
    { icon: <i class="fa-solid fa-envelope"></i> },
  ];
  const { theme } = useTheme();

  return (
    <Continer>
      <div className="flex flex-col md:flex-row flex-1 justify-around items-center gap-4 p-4 ">
        <div
          class={`${
            theme === "dark"
              ? "bg-[#111] shadow-white"
              : "bg-red-950 shadow-red-950"
          } rounded-2xl shadow-sm   max-[320px]:w-[70%] `}
        >
          <div
            className={`group overflow-hidden relative  max-[320px]:w-[100%] after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24
            after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12  before:absolute before:w-20 before:h-20 
           before:rounded-full  before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12  hover:rotate-12 flex justify-center items-center h-56 w-80 origin-bottom-right 
            rounded-2xl outline  -outline-offset-8 
           ${
             theme === "dark"
               ? "after:bg-red-950 bg-[#111] outline-[#000] before:bg-[#000]"
               : "after:bg-red-800 before:bg-gray-400 bg-red-950  outline-white"
           }
           
           
           `}
          >
            <div class="z-10 flex flex-col items-center gap-2">
              <span
                className={`text-6xl font-bold ${
                  theme === "dark" ? "text-red-950" : "text-white"
                }`}
              >
                SR
              </span>
              <p
                class={`${theme === "dark" ? "text-gray-50" : "text-red-900"}`}
              >
                Frontend developer
              </p>
            </div>
          </div>
        </div>
        <h1
          className="text-[40px] font-black w-full md:w-1/3 text-center border-b py-2"
          id="head"
        >
          <Type></Type>
        </h1>
        <div className="flex flex-wrap gap-1 md:gap-4 justify-between w-full md:w-1/6">
          {socials.map((icons) => (
            <Socials {...icons}></Socials>
          ))}
        </div>
      </div>
    </Continer>
  );
}

export default Home;
