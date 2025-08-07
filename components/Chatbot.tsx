"use client"

import { motion, animate, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FiX } from 'react-icons/fi';

export default function Chatbot() {
    const [openChat, setOpenChat] = useState(false)


    return (
        <>
            {
                openChat ?
                    (<ChatBox setOpenChat={setOpenChat} />) :
                    (<motion.div
                        style={{
                            position: 'fixed',
                            bottom: 20,
                            right: 20,
                            fontSize: '3rem',
                            color: 'deepskyblue',
                            cursor: 'pointer',
                            zIndex: 100,
                            pointerEvents: openChat ? "none" : "auto"
                        }}
                        aria-label="Flying bird"
                        onClick={() => { setOpenChat(true) }}
                    >
                        🐦
                    </motion.div>)
            }
        </>
    );
}

const ChatBox = ({ setOpenChat }) => {
    const [query, setQuery] = useState("")
    return (
        <div className="fixed bottom-20 right-20 bg-gray-900 opacity-90 rounded-xl max-w-2xs h-72 p-4 z-50 flex flex-col justify-between items-end">
            <FiX className="w-8 h-8 cursor-pointer" onClick={() => setOpenChat(false)} />
            <form className='relative'>
                <input
                    type="text"
                    placeholder='Ask something about me!'
                    value={query}
                    onChange={(e) => { setQuery(e.target.value) }}
                    className="bg-gray-900 border border-purple-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button type="submit" className='absolute right-0'>Send</button>
            </form>
        </div>
    )
}