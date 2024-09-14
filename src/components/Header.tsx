import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import lightTheme from "../assets/icons/brightness.png";
import darkTheme from "../assets/icons/dark-mode.png";
import { FaTerminal } from 'react-icons/fa';
import AnimatedButton from './animatedButton';


const Header: React.FC = () => {
    const [isPortfolio, setIsPortfolio] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const { scrollYProgress } = useScroll();
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setIsPortfolio(prev => !prev);
                setIsVisible(true);
            }, 2000); // Pause for 2 seconds
        }, 5000); // 3 seconds display + 2 seconds pause = 5 seconds total

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    // Function to toggle between light and dark modes
    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        setDarkMode(!darkMode);
    };


    return (
        <header className="bg-colorGreenish dark:bg-primaryBackgroundDark text-white py-3 fixed-top border-b-2 border-colorDeepGreenish dark:border-violet-600">
            <nav className=" flex flex-row justify-between items-center px-[10%] w-full">
                <div className="w-1/3 text-xl font-bold position-relative" style={{ height: '32px' }}>
                    <AnimatePresence>
                        {isVisible && (
                            <motion.div
                                key={isPortfolio ? "portfolio" : "welcome"}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 5 }}
                                transition={{ duration: 0.5 }}
                            >
                                {isPortfolio ? "My Portfolio" : "Welcome!"}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div className="w-1/3 mx-auto">
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full pl-14 py-2 border rounded-xl text-gray-900 text-sm font-semibold border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-0"
                            placeholder="Execute Command ... "
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center px-3 text-gray-500 dark:text-gray-400 bg-colorDeepGreenish dark:bg-gray-700 rounded-lg">
                            <FaTerminal color='white' />
                        </div>
                    </div>
                </div>
                <ul className="nav w-1/3 justify-end " >
                    <li className="flex nav-item items-center pr-[5%] w-1/6">
                        <img src={darkMode ? darkTheme : lightTheme} onClick={toggleDarkMode} className="w-6 h-6 cursor-pointer hover:w-7 hover:h-7 ease-out delay-100" />
                    </li>
                    <li className="w-1/6">
                        <a href="#home" className=" hover:font-bold" >
                            <AnimatedButton title={'Home'} handleClick={() => { }} icon={undefined} position={''}></AnimatedButton>
                        </a>
                    </li>
                    <li className="w-1/6">
                        <a href="#about" className=" hover:font-bold" >
                            <AnimatedButton title={'About'} handleClick={() => { }} icon={undefined} position={''}></AnimatedButton>
                        </a>
                    </li>
                    <li className="w-1/6">
                        <a href="#career" className=" hover:font-bold" >
                            <AnimatedButton title={'Career'} handleClick={() => { }} icon={undefined} position={''}></AnimatedButton>
                        </a>
                    </li>
                    <li className="w-1/6">
                        <a href="#contact" className=" hover:font-bold" >
                            <AnimatedButton title={'Contact'} handleClick={() => { }} icon={undefined} position={''}></AnimatedButton>
                        </a>
                    </li>
                </ul>
            </nav>
            <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
        </header>
    );
};

export default Header;
