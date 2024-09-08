import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';


const Header: React.FC = () => {
    const [isPortfolio, setIsPortfolio] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const { scrollYProgress } = useScroll();

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

    return (
        <header className="bg-dark text-white py-3 fixed-top">
            <nav className="container d-flex justify-content-between align-items-center px-3">
                <div className="text-xl font-bold position-relative" style={{ height: '32px' }}>
                    <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
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
                <ul className="nav">
                    <li className="nav-item">
                        <a href="#home" className="nav-link text-white">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link text-white">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#career" className="nav-link text-white">
                            Career
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link text-white">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
