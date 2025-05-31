// const About = () => {
//   return (
//     <section
//       id="about"
//       className="min-h-screen max-sm:min-h-[50vh] overflow-hidden flex items-center justify-center text-white px-4 sm:px-6"
//     >
//       <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
//         <figure
//           data-aos="fade-right"
//           data-aos-delay="500"
//           className="flex flex-wrap justify-center gap-4 relative"
//         >
//           <div className="h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] bg-gradient-to-l from-[#6d2897] via-[#6c95f5] to-[#bb61c5] absolute transform rotate-12 z-0 right-5 -top-2 md:top-10 rounded-full">
//             {/* <img
//               src="/public/images/client1.png"
//               alt=""
//               className="absolute -top-2 left-5 sm:left-10 transform -translate-y-12 z-20 w-24 h-24 sm:w-32 sm:h-32 rounded-3xl shadow-lg"
//             /> */}
//           </div>
//         </figure>

//         <article
//           data-aos="fade-left"
//           data-aos-delay="500"
//           className="text-center lg:text-left relative"
//         >
//           <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>
//           <header>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
//               About me
//             </h1>
//           </header>
//           <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
//             eius sunt. Quasi reiciendis corrupti autem nobis deserunt blanditiis
//             quaerat exercitationem ad repellat, vel vero illo sit rerum sapiente
//             necessitatibus officiis optio rem debitis. Illum aliquam minima ut
//             nihil sint, provident quasi! Harum velit cumque modi consequatur ex
//             ipsa ad architecto ullam nesciunt consequuntur, sapiente voluptates.
//           </p>
//           <footer>
//             <button className="inline-flex text-white border-2 py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-sm sm:text-lg">
//               Learn More
//             </button>
//           </footer>
//         </article>
//       </div>
//     </section>
//   );
// };

// export default About;

import { motion } from 'framer-motion'

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-6 bg-gray-950 text-white relative overflow-hidden z-10"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-8 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="relative inline-block">
          {/* <div className="absolute inset-0 bg-[#cd3cf5] blur-2xl opacity-80 -z-10 transform scale-150" /> */}
          <h2 className="text-4xl sm:text-5xl font-bold relative z-10">About Me</h2>
        </div>
        <p className="text-gray-400 text-lg leading-relaxed">
          I'm a passionate full-stack developer with a knack for crafting responsive,
          scalable web applications. I love bringing ideas to life through clean code,
          creative problem-solving, and intuitive design.
        </p>
        <div className="bg-gray-800/30 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg inline-block">
          <h3 className="text-xl font-semibold mb-2 text-purple-400">Things I ❤️:</h3>
          <ul className="text-base text-gray-300 list-disc list-inside space-y-1">
            <li>Building smooth and accessible UIs</li>
            <li>Creating full-stack projects with React, Node.js, and PostgreSQL</li>
            <li>Exploring Data Science and AI</li>
            <li>Learning and sharing what I know</li>
          </ul>
        </div>
      </motion.div>

      {/* Optional Purple Glow */}
      {/* <div className="absolute z-0 w-[80vw] h-[30vh] bg-[#cd3cf5] rounded-full blur-3xl opacity-40 bottom-[160px] max-sm:bottom-[200px] left-1/2 transform -translate-x-1/2" /> */}
    </section>
  )
}

export default AboutMe
