"use client";

import { useAppContext } from "@/context/AppContext";
import React from "react";

// Optional: Define type if not imported from context
type Skill = {
    id: number;
    name: string;
    icon: string;
    category: string;
};

function formatCategory(name: string) {
    return name
        .replace(/-/g, " ")
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}

const Skills = () => {
    const { skills } = useAppContext() as { skills: Skill[] };

    // ✅ Get all unique categories from skills
    const uniqueCategories = Array.from(new Set(skills.map((skill: Skill) => skill.category)));

    // ✅ Group skills by category
    const skillsByCategory = uniqueCategories.reduce((acc, category) => {
        acc[category] = skills.filter((skill: Skill) => skill.category === category);
        return acc;
    }, {} as Record<string, Skill[]>);

    return (
        <section
            id="skills"
            className="relative min-h-screen flex flex-col items-center justify-center text-white px-4 py-20 bg-gray-950 overflow-x-hidden space-y-20"
        >
            <div className="relative z-10 text-center space-y-6 sm:space-y-10 max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold">Technical Expertise</h1>
                <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
                    Specialized in both development and data science, bringing innovative solutions to complex problems.
                </p>
            </div>

            <div className="w-full max-w-5xl mx-auto space-y-16">
                {uniqueCategories.map((category) => {
                    const catSkills = skillsByCategory[category] || [];
                    if (catSkills.length === 0) return null;

                    return (
                        <div key={category}>
                            <h2 className="text-2xl font-semibold mb-6 text-center">
                                {formatCategory(category)}
                            </h2>

                            <div className="skills-carousel-wrapper overflow-hidden relative max-w-full group">
                                <div className="skills-carousel-track flex w-max animate-scroll">
                                    {[...catSkills, ...catSkills].map((skill, idx) => (
                                        <div
                                            key={idx}
                                            className="flex flex-col items-center justify-center w-28 sm:w-32 h-32 mx-4 bg-gray-800 rounded-xl p-4 shrink-0 transition-transform hover:scale-105"
                                        >
                                            <img
                                                src={skill.icon}
                                                alt={`${skill.name} icon`}
                                                className="w-12 h-12 object-contain mb-2"
                                                onError={(e) => (e.currentTarget.src = "/fallback-icon.svg")}
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
