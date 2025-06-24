"use client"

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../constants";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header
            className={`navbar scrolled`}
            data-aos="fade-up"
            data-aos-delay="300"
        >
            <div className="inner">
                <a href="#home" className="logo">
                    Sachin Bharbey
                </a>
                {
                    isOpen ? (
                        <button
                            className="md:hidden text-white cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            <FiX className="w-8 h-8" />
                        </button>
                    ) : (
                        <button
                            className="md:hidden text-white cursor-pointer"
                            onClick={() => setIsOpen(true)}
                        >
                            <FiMenu className="w-8 h-8" />
                        </button>
                    )
                }

                <nav className="desktop">
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.id} className="group">
                                <a href={link.link}>
                                    <span>{link.name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a
                    href="#contact"
                    className="contact-btn group hidden md:block focus:outline-none"
                >
                    <div className="inner">
                        <span>Contact me</span>
                    </div>
                </a>
            </div>

            <div
                className={`${isOpen ? "block" : "hidden"
                    } md:hidden bg-[#031B34] absolute top-10 right-4 min-w-[210px] flex flex-col mt-4 items-center justify-center space-y-8 p-2 rounded-lg scale-up-center py-8`}
            >
                <div className='flex flex-col gap-y-4'>
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.link}
                            className="text-lg leading-[25px] text-white hover:text-gray-300 cursor-pointer font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
                <a
                    href="#contact"
                    className="contact-btn group focus:outline-none"
                    onClick={() => setIsOpen(false)}
                >
                    <div className="inner">
                        <span>Contact me</span>
                    </div>
                </a>
            </div>
        </header>
    );
};

export default Navbar;