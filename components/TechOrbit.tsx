'use client'
import React from 'react'

const techStack = [
    { src: '/icons/react.png', alt: 'React' },
    { src: '/icons/node.png', alt: 'Node.js' },
    { src: '/icons/python.png', alt: 'Python' },
    { src: '/icons/js.png', alt: 'JavaScript' },
    { src: '/icons/next.png', alt: 'Next.js' }
]

const TechOrbit = () => {
    const radius = 100 // Distance from center

    return (
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden md:flex w-[250px] h-[250px] items-center justify-center">
            <div className="relative w-full h-full animate-spin-slow">
                {techStack.map((tech, index) => {
                    const angle = (360 / techStack.length) * index
                    const x = radius * Math.cos((angle * Math.PI) / 180)
                    const y = radius * Math.sin((angle * Math.PI) / 180)

                    return (
                        <img
                            key={index}
                            src={tech.src}
                            alt={tech.alt}
                            className="absolute w-12 h-12 rounded-full bg-white p-1 shadow-md"
                            style={{
                                left: `calc(50% + ${x}px - 24px)`,
                                top: `calc(50% + ${y}px - 24px)`
                            }}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default TechOrbit
