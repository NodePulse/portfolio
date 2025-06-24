import { motion } from 'framer-motion'

const About = () => {
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

export default About