"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ResumePage = () => {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setMounted(true), 50);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="min-h-screen w-full bg-gray-950 text-white flex flex-col items-center justify-center p-4 relative">
            {/* ✖ Close Button */}
            <button
                onClick={() => router.push("/")}
                className="absolute top-4 right-4 z-50 bg-gray-800 hover:bg-red-500 text-white px-4 py-2 rounded-md shadow transition hover:cursor-pointer"
            >
                ✖ Close
            </button>

            {/* <h1 className="text-xl sm:text-2xl font-semibold mb-6 text-center">
                📄 My Resume
            </h1> */}

            <div
                className={`w-full max-w-5xl h-[80vh] bg-white rounded-md shadow-2xl ring-2 ring-green-500/10 overflow-hidden transition-opacity duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
            >
                <embed
                    src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                    type="application/pdf"
                    className="w-full h-full"
                />
            </div>
        </div>
    );
};

export default ResumePage;
