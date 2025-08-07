"use client";

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full bg-gradient-to-br from-[#7e22ce] to-[#2563eb] text-white px-6 py-8"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Branding */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center md:text-left"
                >
                    <h1 className="text-2xl font-semibold italic tracking-tight">
                        Sachin
                    </h1>
                    <p className="text-sm text-gray-200 mt-1">
                        Developer. Data Explorer. Dream Builder.
                    </p>
                </motion.div>

                {/* Socials */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex gap-5 text-2xl"
                >
                    {[
                        {
                            icon: <FaGithub />,
                            href: "https://github.com/NodePulse",
                            title: "GitHub",
                        },
                        {
                            icon: <FaLinkedin />,
                            href: "https://linkedin.com/in/sachin-bharbey-b128a4242",
                            title: "LinkedIn",
                        },
                        {
                            icon: <FaEnvelope />,
                            href: "mailto:bharbeysachin@gmail.com",
                            title: "Email",
                        },
                        {
                            icon: <FaTwitter />,
                            href: "https://twitter.com/sachin_bh31",
                            title: "Twitter",
                        },
                    ].map(({ icon, href, title }) => (
                        <a
                            key={title}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={title}
                            className="hover:text-gray-300 transition-transform hover:scale-110"
                        >
                            {icon}
                        </a>
                    ))}
                </motion.div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-center md:text-right text-sm text-gray-300"
                >
                    &copy; {new Date().getFullYear()} Sachin — Built with Code & Curiosity.
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;
