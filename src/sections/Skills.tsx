// // import { skills } from "../constants";
// // import { motion } from "framer-motion"

// // const Skills = () => {
// //   return (
// //     <section
// //       id="skills"
// //       className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10 bg-gray-950"
// //     >
// //       <div className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-28 left-1/2 transform -translate-x-1/2" />

// //       <div className="relative z-20 text-center space-y-6 sm:space-y-10">
// //         <header>
// //           <motion.h1 className="text-4xl sm:text-4xl font-bold"
// //             initial={{ opacity: 0, y: -40 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //           >
// //             My Skills
// //           </motion.h1>
// //           <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
// //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
// //             corrupti ullam architecto quasi. Ipsam, sunt quisquam doloremque ea
// //             eum nulla?
// //           </p>
// //         </header>
// //         {/* <div
// //           data-aos="fade-up"
// //           data-aos-delay="500"
// //           className="flex flex-wrap gap-y-6 gap-8 justify-center mt-6 px-2 sm:px-0 mx-auto"
// //         >
// //           {skills.map((skill) => (
// //             <div
// //               key={skill.id}
// //               className="flex flex-col items-center justify-center gap-2"
// //             >
// //               <img
// //                 src={skill.icon}
// //                 alt={skill.name}
// //                 className="w-12 h-12 sm:w-16 sm:h-16"
// //               />
// //               <p className="text-sm sm:text-base font-semibold">{skill.name}</p>
// //             </div>
// //           ))}
// //         </div> */}
// //         <motion.div
// //           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center"
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           variants={{
// //             visible: { transition: { staggerChildren: 0.15 } },
// //             hidden: {},
// //           }}
// //         >
// //           {skills.map((skill) => (
// //             <motion.div
// //               key={skill.id}
// //               className="w-20 h-20 hover:scale-110 transition-transform duration-300 cursor-pointer"
// //               variants={{
// //                 visible: { opacity: 1, y: 0 },
// //                 hidden: { opacity: 0, y: 20 },
// //               }}
// //             >
// //               <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
// //               <p className="text-sm text-center mt-2">{skill.name}</p>
// //             </motion.div>
// //           ))}
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Skills;
// import { skills } from "../constants";
// import { AnimatePresence, motion } from "framer-motion";
// import { useState } from "react";

// const Skills = () => {
//   const [activeCategory, setActiveCategory] = useState<string>("all");

//   const filteredSkills = activeCategory === "all"
//     ? skills
//     : skills.filter(skill => skill.category === activeCategory);

//   return (
//     <section
//       id="skills"
//       className="relative min-h-screen overflow-hidden flex flex-col items-center text-white px-4 pt-48 bg-gray-950"
//     >
//       <div className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-30 left-1/2 transform -translate-x-1/2" />

//       <div className="relative z-20 text-center space-y-6 sm:space-y-10 w-full max-w-6xl mx-auto">
//         <header>
//           <motion.h1
//             className="text-4xl sm:text-4xl font-bold"
//             initial={{ opacity: 0, y: -40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             Technical Expertise
//           </motion.h1>
//           <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
//             Specialized in both development and data science, bringing innovative solutions to complex problems
//           </p>
//         </header>

//         <div className="flex justify-center gap-4 mb-8">
//           {["all", "development", "data-science"].map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`px-4 py-2 rounded-full transition-all ${activeCategory === category
//                 ? 'bg-[#cd3cf5] text-white'
//                 : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
//             >
//               {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
//             </button>
//           ))}
//         </div>

//         {/* <motion.div
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{
//             visible: { transition: { staggerChildren: 0.15 } },
//             hidden: {},
//           }}
//         >
//           {filteredSkills.map((skill) => (
//             <motion.div
//               key={skill.id}
//               className="w-24 h-24 bg-gray-800 rounded-xl p-4 hover:scale-110 transition-transform duration-300 cursor-pointer flex flex-col items-center justify-center"
//               variants={{
//                 visible: { opacity: 1, y: 0 },
//                 hidden: { opacity: 0, y: 20 },
//               }}
//             >
//               <img
//                 src={skill.icon}
//                 alt={skill.name}
//                 className="w-12 h-12 object-contain mb-2"
//               />
//               <p className="text-sm text-center font-medium">{skill.name}</p>
//             </motion.div>
//           ))}
//         </motion.div> */}
//         <motion.div
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             visible: { transition: { staggerChildren: 0.15 } },
//             hidden: {},
//           }}
//         >
//           <AnimatePresence>
//             {filteredSkills.map((skill) => (
//               <motion.div
//                 key={skill.id}
//                 className="w-24 h-24 bg-gray-800 rounded-xl p-4 hover:scale-110 transition-transform duration-300 cursor-pointer flex flex-col items-center justify-center"
//                 variants={{
//                   visible: { opacity: 1, y: 0 },
//                   hidden: { opacity: 0, y: 20 },
//                 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain mb-2" />
//                 <p className="text-sm text-center font-medium">{skill.name}</p>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import { skills } from "../constants";

const categories = ["development", "data-science", "others"]; // add more if needed

const Skills = () => {
  // Group skills by category
  const skillsByCategory = categories.reduce((acc, category) => {
    acc[category] = skills.filter(skill => skill.category === category);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center text-white px-4 py-20 bg-gray-950 overflow-hidden space-y-20"
    >
      {/* <div className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-28 left-1/2 transform -translate-x-1/2" /> */}

      <div className="relative z-10 text-center space-y-6 sm:space-y-10 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold">Technical Expertise</h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Specialized in both development and data science, bringing innovative solutions to complex problems.
        </p>
      </div>

      {/* Multiple carousels for each category */}
      <div className="w-full max-w-5xl mx-auto space-y-16">
        {categories.map((category) => {
          const catSkills = skillsByCategory[category] || [];
          if (catSkills.length === 0) return null;

          return (
            <div key={category}>
              <h2 className="text-2xl font-semibold mb-6 capitalize text-center">
                {category.split("-").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")}
              </h2>

              <div className="skills-carousel-wrapper overflow-hidden relative">
                <div className="skills-carousel-track flex w-max animate-scroll">
                  {[...catSkills, ...catSkills].map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-center w-28 sm:w-32 h-32 mx-4 bg-gray-800 rounded-xl p-4 shrink-0 transition-transform hover:scale-105"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-12 h-12 object-contain mb-2"
                      />
                      <p className="text-sm text-center font-medium text-white">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;


