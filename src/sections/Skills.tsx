import { skills } from "../constants";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10"
    >
      <div className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2" />

      <div className="relative z-20 text-center space-y-6 sm:space-y-10">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold">My Skills</h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            corrupti ullam architecto quasi. Ipsam, sunt quisquam doloremque ea
            eum nulla?
          </p>
        </header>
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4"
        >
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center justify-center gap-2"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 sm:w-16 sm:h-16"
              />
              <p className="text-sm sm:text-base font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
