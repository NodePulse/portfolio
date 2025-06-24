import React from 'react'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { words } from '@/constants'
import Button from '@/components/Button'
import { useRouter } from 'next/navigation'

const Hero = () => {

    const router = useRouter()

    useGSAP(() => {
        gsap.fromTo(
            ".hero-text h1",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
        )
    })

    return (
        <section id='home' className='relative overflow-hidden bg-gray-950'>
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="background" />
            </div>

            <div className="hero-layout">
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>
                                Shapping
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word) => (
                                            <span
                                                key={word.index}
                                                className="flex items-center md:gap-3 gap-1 pb-2"
                                            >
                                                <img
                                                    src={word.imgPath}
                                                    alt={word.text}
                                                    className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                                />
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>into Real Projects</h1>
                            <h1>that deliver Results</h1>
                        </div>
                        <p className="text-white-50 text-lg md:text-xl relative z-10 pointer-events-none">
                            Hi, I am Sachin, a developer from India with a passion for code.
                        </p>
                        {/* <Button
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="button"
                            text="See my Work"
                        /> */}
                        <div className="flex flex-wrap items-center gap-4 z-10">
                            <button
                                onClick={() => router.push("/resume")}
                                className="bg-white text-black font-semibold px-6 py-3 md:px-8 md:py-4 rounded-md transition duration-300 hover:bg-gray-200 hover:cursor-pointer"
                            >
                                See Resume
                            </button>

                            <button
                                onClick={() => {
                                    const link = document.createElement("a");
                                    link.href = "/resume.pdf";
                                    link.download = "Sachin_Resume.pdf";
                                    link.click();
                                }}
                                className="bg-transparent border border-white text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-md transition duration-300 hover:bg-white hover:text-black hover:cursor-pointer"
                            >
                                Download Resume
                            </button>
                        </div>
                    </div>
                </header>
            </div>
        </section>
    )
}

export default Hero