import mypic from "../../Assets/Pic/Mypic.jpg";
import Continer from "../../Components/Continer";
import useTheme from "../../Hooks/useTheme";

function About() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Continer>
      <div
        className={`
          flex flex-col md:flex-row items-center gap-8 rounded-2xl p-8 shadow-lg 
          transition-colors duration-300 ease-in-out
          ${isDark ? "bg-[#111] text-gray-200" : "bg-gray-100 text-gray-900"}
        `}
      >
        <img
          src={mypic}
          alt="Abolfazl Taj"
          className={`
            w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-md 
            border-4 transition-colors duration-300 ease-in-out
            ${isDark ? "border-red-900" : "border-red-950"}
          `}
        />
        <div className="flex flex-col gap-4 max-w-2xl">
          <h1
            className={`
              text-3xl font-bold transition-colors duration-300 ease-in-out
              ${isDark ? "text-red-900" : "text-red-950"}
            `}
          >
            About Me
          </h1>
          <p className="leading-relaxed">
            I am a{" "}
            <span
              className={`
                font-semibold transition-colors duration-300 ease-in-out
                ${isDark ? "text-red-900" : "text-red-950"}
              `}
            >
              Passionate Front-End Developer
            </span>{" "}
            with strong skills in modern web development, design, and
            problem-solving. I specialize in creating clean, responsive, and
            user-friendly interfaces that deliver seamless experiences across
            devices.
          </p>
          <p className="leading-relaxed">
            I’m eager to take on challenging opportunities where I can
            contribute technical expertise, drive innovation, and bring creative
            ideas to life. I thrive in collaborative environments, where I can
            work effectively within a dynamic team while continuing to enhance
            my skills and stay up-to-date with the latest technologies.
          </p>
          <p className="leading-relaxed">
            My focus is on writing efficient, maintainable code and building
            applications that not only meet requirements but also exceed user
            expectations. With a growth mindset and a commitment to continuous
            learning, I aim to add value to every project I take on.
          </p>
        </div>
      </div>
    </Continer>
  );
}

export default About;
