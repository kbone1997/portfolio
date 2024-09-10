import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import background from "../assets/images/firstBg.jpg"
import bottomBackground from "../assets/images/firstBg-removebg.png"

export default function MultiLayer() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);

    const titles = [
        "Software Engineer",
        "Software Developer",
        "Frontend Developer",
        "Fullstack Developer",
        "Backend Developer",
    ];

    const [currentTitle, setCurrentTitle] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitle((prevTitle) => (prevTitle + 1) % titles.length);
        }, 4000); // 4 seconds

        return () => clearInterval(interval); // Clean up the interval
    }, [titles.length]);

    return (
        <div
            ref={ref}
            className="w-full h-screen overflow-hidden relative grid place-items-center"
        >
            <motion.div
                style={{ y: textY }}
                className=" relative z-10"
            >
                <h1 className="font-bold text-white text-7xl md:text-7xl">Hello,</h1>
                <h1 className="font-bold text-white text-xl">My name is Doha Khan Mozlish</h1>
                <h1 className="font-bold text-white text-xl flex flex-row gap-2">I am a
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={titles[currentTitle]} // Use key to trigger re-render and animation
                            className="font-bold text-white text-xl"
                            initial={{ opacity: 0, y: 20 }} // Initial animation (before entering)
                            animate={{ opacity: 1, y: 0 }} // Animate to visible state
                            exit={{ opacity: 0, y: -20 }} // Animate on exit
                            transition={{ duration: 0.5 }} // Animation duration
                        >
                            {titles[currentTitle]}
                        </motion.h1>
                    </AnimatePresence>
                </h1>

            </motion.div>

            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: backgroundY,
                }}
            />
            <div
                className="absolute inset-0 z-20"
                style={{
                    backgroundImage: `url(${bottomBackground})`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }}
            />
        </div>
    );
}