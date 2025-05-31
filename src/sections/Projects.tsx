import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../constants";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
}

const ProjectCard = ({ image, title, description, link, github }: ProjectCardProps) => (
  <article className="relative w-full max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group">
    <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10" />
    <div className="relative z-10">
      <figure className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-auto max-h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute h-[202px] inset-0 flex flex-col gap-2 items-center justify-center bg-purple-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5] cursor-pointer">
              Live Preview
            </button>
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-200 font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-black cursor-pointer">
              GitHub Repo
            </button>
          </a>
        </div>
      </figure>
      <div className="px-6 py-4">
        <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-200 text-base">{description}</p>
      </div>
    </div>
  </article>
);


const categoryTitles: Record<string, string> = {
  all: "All Projects",
  "web-development": "Web Development",
  "data-science": "Data Science",
  others: "Other Projects",
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <main className="bg-gray-950 py-20 min-h-screen">
      <section id="projects" className="bg-gray-950 px-4 sm:px-10 max-w-7xl mx-auto py-20">
        <div className="mb-12 text-center mx-2" data-aos="fade-up" data-aos-delay="300">
          <header>
            <h1 className="text-3xl text-white sm:text-4xl font-bold mb-6">
              My <span className="text-purple-400">Projects</span>
            </h1>
            <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base max-w-3xl mx-auto">
              Explore my projects categorized by different domains.
            </p>
          </header>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center mb-10 flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold text-sm sm:text-base transition-colors
                ${selectedCategory === cat
                  ? "bg-purple-500 text-white shadow-lg"
                  : "bg-gray-700 text-gray-300 hover:bg-purple-600 hover:text-white"
                }`}
            >
              {categoryTitles[cat] || cat}
            </button>
          ))}
        </div>

        {/* Projects grid with animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-10 justify-center"
        >
          <AnimatePresence>
            {filteredProjects.length === 0 ? (
              <motion.p
                className="text-gray-400 text-center w-full col-span-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                No projects found in this category.
              </motion.p>
            ) : (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                >
                  <ProjectCard
                    title={project.name}
                    description={project.description}
                    image={project.image}
                    link={project.link}
                    github={project.github}
                  />
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
};

export default Projects;
