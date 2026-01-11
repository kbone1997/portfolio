import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header: React.FC = () => {
    const [isPortfolio, setIsPortfolio] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setIsPortfolio(prev => !prev);
                setIsVisible(true);
            }, 500);
        }, 4000);
        return () => clearInterval(interval);
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

    // Simple scroll progress tracker
    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
            setScrollProgress(progress);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        <header className={`fixed top-0 w-full z-50 ${darkMode ? 'header-dark' : 'header-light'}`}>
            <nav className="flex flex-row justify-between items-center px-[5%] lg:px-[10%] w-full py-4">
                {/* Logo */}
                <div className="w-1/3 text-lg lg:text-xl font-bold" style={{ height: '32px' }}>
                    <AnimatePresence>
                        {isVisible && (
                            <motion.div
                                key={isPortfolio ? "portfolio" : "welcome"}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.3 }}
                                className={darkMode ? 'gradient-text-dark' : 'gradient-text-light'}
                            >
                                {isPortfolio ? "Portfolio" : "Welcome!"}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Navigation */}
                <ul className="flex items-center gap-6 lg:gap-8">
                    <li>
                        <a href="#home" className={darkMode ? 'nav-link-dark' : 'nav-link-light'}>
                            Home
                        </a>
                    </li>
                    <li className="hidden sm:block">
                        <a href="#about" className={darkMode ? 'nav-link-dark' : 'nav-link-light'}>
                            About
                        </a>
                    </li>
                    <li className="hidden md:block">
                        <a href="#career" className={darkMode ? 'nav-link-dark' : 'nav-link-light'}>
                            Career
                        </a>
                    </li>
                    <li>
                        <button
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-full transition-all duration-300 ${darkMode
                                    ? 'bg-dark-card hover:bg-dark-cardHover text-yellow-400'
                                    : 'bg-light-card hover:bg-light-cardHover text-light-accent'
                                }`}
                        >
                            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
                        </button>
                    </li>
                </ul>
            </nav>
            {/* Progress bar */}
            <div
                className={`h-[3px] ${darkMode ? 'progress-bar-dark' : 'progress-bar-light'}`}
                style={{
                    width: `${scrollProgress * 100}%`,
                    transition: 'width 0.1s ease-out'
                }}
            />
        </header>
    );
};

export default Header;
