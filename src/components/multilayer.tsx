import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import mainBGLight from "../assets/images/lightBG.jpg";
import mainBGDark from "../assets/images/mainBG.jpg";
import firstBG from "../assets/images/firstBG.png";
import secondBG from "../assets/images/secondBG.png";
import thirdBG from "../assets/images/thirdBG.png";
import fourthBG from "../assets/images/fourthBG.png";

export default function MultiLayer() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Create a parallax effect for each background layer
    const mainBGY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const firstBGY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const secondBGY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const thirdBGY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const fourthBGY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);
    const theme = localStorage.getItem("theme");

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


            <div className="w-full h-screen flex flex-row items-center justify-center">

                <motion.div
                    style={{ y: textY }}
                    className="z-[3] pb-[10%] flex flex-row w-1/3 items-center justify-center gap-2"
                >
                    <h1 className="font-bold text-white text-xl">My name is </h1>
                    <h1 className="font-bold text-white text-xl">Doha Khan Mozlish</h1>
                </motion.div>

                <motion.div
                    style={{ y: textY }}
                    className="z-[1] pb-[20%] w-1/3 text-center gap-6"
                >
                    <h1 className="font-bold text-white text-9xl ">Hello</h1>
                </motion.div>
                <motion.div
                    style={{ y: textY }}
                    className="z-[5] pb-[5%] w-1/3 gap-6 justify-center items-center flex"
                >
                    <h1 className="font-bold text-white text-base flex flex-row gap-2 text-center">
                        I am a
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={titles[currentTitle]} // Use key to trigger re-render and animation
                                initial={{ opacity: 0, y: 20 }} // Initial animation (before entering)
                                animate={{ opacity: 1, y: 0 }} // Animate to visible state
                                exit={{ opacity: 0, y: -20 }} // Animate on exit
                                transition={{ duration: 0.5 }} // Animation duration
                            >
                                <h1 className="font-bold text-white text-xl text-center">{titles[currentTitle]}</h1>
                            </motion.h1>
                        </AnimatePresence>
                    </h1>
                </motion.div>
            </div>

            {/* Main background image */}
            <motion.div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={theme} // Ensure the key changes when the theme changes, triggering the animation
                        className={`absolute inset-0 z-0 ${theme === "dark" ? "" : "pt-[100%]"}`}
                        style={{
                            backgroundImage: `url(${theme === "dark" ? mainBGDark : mainBGLight})`,
                            backgroundPosition: "bottom",
                            backgroundSize: "cover",
                            y: mainBGY,
                        }}
                        initial={{ opacity: 0 }} // Start with opacity 0 (hidden)
                        animate={{ opacity: 1 }} // Fade in to full opacity
                        exit={{ opacity: 0 }} // Fade out on exit
                        transition={{ duration: 0.5 }} // Control the duration of the fade
                    />
                </AnimatePresence>
            </motion.div>

            {/* First parallax layer */}
            <motion.div
                className="absolute inset-0 z-[8]"
                style={{
                    backgroundImage: `url(${firstBG})`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: firstBGY
                }}
            />

            {/* Second parallax layer */}
            <motion.div
                className="absolute inset-0 z-[6]"
                style={{
                    backgroundImage: `url(${secondBG})`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: secondBGY
                }}
            />

            {/* Third parallax layer */}
            <motion.div
                className="absolute inset-0 z-[4]"
                style={{
                    backgroundImage: `url(${thirdBG})`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: thirdBGY
                }}
            />

            {/* Fourth parallax layer */}
            <motion.div
                className="absolute inset-0 z-[2]"
                style={{
                    backgroundImage: `url(${fourthBG})`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: fourthBGY
                }}
            />
        </div>
    );
}
