"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "@/context/AppContext";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
    github: string;
}

const capitalizeWords = (text: string) =>
    text
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

const ProjectCard = ({ image, title, description, link, github }: ProjectCardProps) => (
    <article className="relative w-full max-w-sm bg-gray-800 rounded-xl overflow-hidden shadow-lg group flex flex-col h-full">
        <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10" />
        <div className="relative z-10 flex flex-col h-full">
            <figure className="relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute h-48 inset-0 flex flex-col gap-3 items-center justify-center bg-purple-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
            <div className="px-6 py-4 flex-grow flex flex-col justify-between">
                <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
                <p className="text-gray-300 text-sm min-h-[60px]">{description}</p>
            </div>
        </div>
    </article>
);

const Projects = () => {
    const { projects } = useAppContext();
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Dynamically create categories
    const categories = useMemo(() => {
        const unique = Array.from(new Set(projects.map((p) => p.category)));
        return ["all", ...unique];
    }, [projects]);

    // Create dynamic display titles
    const categoryTitles = useMemo(() => {
        const titles: Record<string, string> = { all: "All Projects" };
        projects.forEach((project) => {
            if (!titles[project.category]) {
                titles[project.category] = capitalizeWords(project.category);
            }
        });
        return titles;
    }, [projects]);

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
            <section id="projects" className="px-4 sm:px-10 max-w-7xl mx-auto py-20">
                <div className="mb-12 text-center" data-aos="fade-up" data-aos-delay="300">
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        My <span className="text-purple-400">Projects</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                        Explore projects built across web development, data science, and more.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex justify-center flex-wrap gap-4 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full font-semibold text-sm sm:text-base transition-colors ${selectedCategory === cat
                                    ? "bg-purple-500 text-white shadow-lg"
                                    : "bg-gray-700 text-gray-300 hover:bg-purple-600 hover:text-white"
                                }`}
                        >
                            {categoryTitles[cat] || capitalizeWords(cat)}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-10 justify-center items-stretch"
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
