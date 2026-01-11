import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import mainBGLight from "../assets/images/lightBG.jpg";
import mainBGDark from "../assets/images/mainBG.jpg";
import firstBG from "../assets/images/firstBG.png";
import secondBG from "../assets/images/secondBG.png";
import thirdBG from "../assets/images/thirdBG.png";
import fourthBG from "../assets/images/fourthBG.png";
import { FaDownload } from "react-icons/fa";

export default function MultiLayer() {
    const [darkMode, setDarkMode] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const checkTheme = () => {
            setDarkMode(document.documentElement.classList.contains('dark'));
        };
        checkTheme();
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const titles = [
        "Software Engineer",
        "Frontend Developer",
        "Fullstack Developer",
        "Flutter Developer",
    ];

    const [currentTitle, setCurrentTitle] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitle((prevTitle) => (prevTitle + 1) % titles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [titles.length]);

    const text1Y = scrollY * 1.2;
    const text1Opacity = Math.max(0, 1 - scrollY / 300);
    const text2Y = scrollY * 0.8;
    const text2Opacity = Math.max(0, 1 - scrollY / 450);
    const text3Y = scrollY * 0.5;
    const text3Opacity = Math.max(0, 1 - scrollY / 600);

    const mountain1Y = scrollY * 0.05;
    const mountain2Y = scrollY * 0.1;
    const mountain3Y = scrollY * 0.15;
    const mountain4Y = scrollY * 0.2;

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-screen overflow-hidden" style={{ zIndex: 0 }}>
                <div className="absolute inset-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={darkMode ? 'dark' : 'light'}
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `url(${darkMode ? mainBGDark : mainBGLight})`,
                                backgroundPosition: "bottom",
                                backgroundSize: "cover",
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        />
                    </AnimatePresence>
                </div>

                <div
                    className="absolute flex justify-start pointer-events-none"
                    style={{ top: '25%', left: '10%', transform: `translateY(${text1Y}px)`, opacity: text1Opacity, zIndex: 1 }}
                >
                    <h1
                        className="font-bold text-white text-5xl md:text-7xl lg:text-8xl"
                        style={{ textShadow: '0 0 100px rgba(255,255,255,0.5)', letterSpacing: '0.05em' }}
                    >
                        Hello
                    </h1>
                </div>

                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: `url(${fourthBG})`, backgroundPosition: "bottom", backgroundSize: "cover", transform: `translateY(${mountain4Y}px)`, zIndex: 2 }}
                />

                <div
                    className="absolute flex justify-center pointer-events-none"
                    style={{ top: '40%', left: '50%', transform: `translateX(-50%) translateY(${text2Y}px)`, opacity: text2Opacity, zIndex: 3 }}
                >
                    <p className="text-white text-xl md:text-3xl lg:text-4xl font-semibold text-center" style={{ textShadow: '0 0 60px rgba(255,255,255,0.4)' }}>
                        I'm <span className="font-bold">Doha Khan Mozlish</span>
                    </p>
                </div>

                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: `url(${thirdBG})`, backgroundPosition: "bottom", backgroundSize: "cover", transform: `translateY(${mountain3Y}px)`, zIndex: 4 }}
                />

                <div
                    className="absolute flex justify-end pointer-events-none"
                    style={{ top: '50%', right: '10%', transform: `translateY(${text3Y}px)`, opacity: text3Opacity, zIndex: 5 }}
                >
                    <div className="flex items-center gap-2">
                        <span className="text-white/90 text-base md:text-xl lg:text-2xl" style={{ textShadow: '0 0 40px rgba(255,255,255,0.3)' }}>
                            I am a
                        </span>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={titles[currentTitle]}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className={`text-lg md:text-2xl lg:text-3xl font-bold ${darkMode ? 'text-indigo-300' : 'text-orange-200'}`}
                                style={{ textShadow: '0 0 50px rgba(255,255,255,0.4)' }}
                            >
                                {titles[currentTitle]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </div>

                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: `url(${secondBG})`, backgroundPosition: "bottom", backgroundSize: "cover", transform: `translateY(${mountain2Y}px)`, zIndex: 6 }}
                />

                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: `url(${firstBG})`, backgroundPosition: "bottom", backgroundSize: "cover", transform: `translateY(${mountain1Y}px)`, zIndex: 7 }}
                />

                <div className="absolute top-24 right-8" style={{ opacity: text1Opacity, zIndex: 30 }}>
                    <button
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = "/assets/DohaKhanMozlish.pdf";
                            link.download = 'DohaKhanMozlish_Resume.pdf';
                            link.click();
                        }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${darkMode
                            ? 'bg-dark-accent/20 text-dark-accent hover:bg-dark-accent hover:text-white border border-dark-accent'
                            : 'bg-light-accent/20 text-light-accent hover:bg-light-accent hover:text-white border border-light-accent'
                            }`}
                    >
                        <FaDownload size={14} />
                        <span className="text-sm">Resume</span>
                    </button>
                </div>
            </div>

            <div className="h-screen w-full" style={{ position: 'relative', zIndex: -1 }} />
        </>
    );
}
