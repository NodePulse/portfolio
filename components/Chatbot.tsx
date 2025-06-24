// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaTwitter } from 'react-icons/fa';

// export default function ChatbotBird() {
//     const [open, setOpen] = useState(false);
//     const [path, setPath] = useState<{ xs: number[]; ys: number[] } | null>(null);
//     const [landed, setLanded] = useState(false);

//     // Safe random path generator with limited wiggle range
//     function generateMonotonicPath() {
//         const steps = 4; // number of intermediate points
//         const startX = -200;
//         const startY = -200;

//         const xs = [startX];
//         const ys = [startY];

//         for (let i = 1; i <= steps; i++) {
//             // Generate next x/y between previous value and 0 (monotonically increasing)
//             const nextX = xs[i - 1] + Math.random() * (0 - xs[i - 1]);
//             const nextY = ys[i - 1] + Math.random() * (0 - ys[i - 1]);
//             xs.push(nextX);
//             ys.push(nextY);
//         }

//         xs.push(0); // final landing position
//         ys.push(0);

//         return { xs, ys };
//     }

//     useEffect(() => {
//         // delay generation so motion picks it up smoothly
//         setTimeout(() => {
//             setPath(generateMonotonicPath());
//         }, 2000);
//     }, []);

//     return (
//         <>
//             {/* Animate bird flying in only before landing */}
//             {!landed && path && (
//                 <motion.button
//                     // initial={{ opacity: 0 }}
//                     animate={{ x: path.xs, y: path.ys, opacity: 1 }}
//                     transition={{
//                         duration: 2,
//                         ease: 'easeInOut',
//                         times: path.xs.map((_, i, arr) => i / (arr.length - 1)),
//                     }}
//                     onAnimationComplete={() => setLanded(true)}
//                     className="fixed bottom-6 right-6 z-50 text-blue-500 text-4xl pointer-events-none"
//                     aria-label="Flying Chatbot Bird"
//                 >
//                     <FaTwitter />
//                 </motion.button>
//             )}

//             {/* After landing, static clickable bird */}
//             {landed && (
//                 <button
//                     onClick={() => setOpen(!open)}
//                     className="fixed bottom-6 right-6 z-50 text-blue-500 text-4xl hover:scale-110 transition-transform"
//                     aria-label="Chatbot Bird"
//                 >
//                     <FaTwitter />
//                 </button>
//             )}

//             {/* Floating chatbot input */}
//             {open && (
//                 <motion.div
//                     // initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 1 }}
//                     className="fixed bottom-20 right-6 w-80 bg-white rounded-xl shadow-xl border p-4 z-50"
//                 >
//                     <div className="mb-2 text-sm text-gray-700">
//                         Hi! I’m your assistant 🐥. Ask me anything!
//                     </div>
//                     <input
//                         className="w-full border rounded px-3 py-2 text-sm"
//                         placeholder="Type your message..."
//                         onKeyDown={(e) => {
//                             if (e.key === 'Enter') {
//                                 console.log('User input:', (e.target as HTMLInputElement).value);
//                                 (e.target as HTMLInputElement).value = '';
//                             }
//                         }}
//                     />
//                 </motion.div>
//             )}
//         </>
//     );
// }
import { motion, animate, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Chatbot() {
    const pathRef = useRef<SVGPathElement>(null);
    const progress = useMotionValue(0);

    const x = useTransform(progress, (p) => {
        if (!pathRef.current) return 0;
        const len = pathRef.current.getTotalLength();
        const point = pathRef.current.getPointAtLength(p * len);
        return point.x;
    });

    const y = useTransform(progress, (p) => {
        if (!pathRef.current) return 0;
        const len = pathRef.current.getTotalLength();
        const point = pathRef.current.getPointAtLength(p * len);
        return point.y;
    });

    useEffect(() => {
        const controls = animate(progress, 1, {
            duration: 3,
            ease: "easeInOut"
        });

        return () => controls.stop();
    }, [progress]);

    return (
        <>
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <path
                    ref={pathRef}
                    d="M -200 -200 C -150 -150, -100 -100, 0 0"
                    fill="none"
                    stroke="transparent"
                />
            </svg>

            <motion.div
                style={{
                    position: 'fixed',
                    bottom: 0,
                    right: 0,
                    x,
                    y,
                    fontSize: '3rem',
                    color: 'deepskyblue',
                    cursor: 'pointer',
                    zIndex: 100,
                }}
                aria-label="Flying bird"
            >
                🐦
            </motion.div>
        </>
    );
}
