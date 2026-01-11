import React, { useEffect, useState } from 'react';
import '../App.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        const checkTheme = () => {
            setDarkMode(document.documentElement.classList.contains('dark'));
        };
        checkTheme();
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    return (
        <footer className={`py-8 px-4 ${darkMode
                ? 'bg-dark-card border-t border-dark-border'
                : 'bg-light-card border-t border-light-border'
            }`}>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className={`text-sm font-medium ${darkMode ? 'text-dark-textMuted' : 'text-light-textMuted'
                    }`}>
                    © {currentYear} <span className={darkMode ? 'gradient-text-dark' : 'gradient-text-light'}>Doha Khan Mozlish</span>. All rights reserved.
                </p>

                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full transition-all duration-300 ${darkMode
                                ? 'text-dark-textMuted hover:text-dark-accent hover:bg-dark-cardHover'
                                : 'text-light-textMuted hover:text-light-accent hover:bg-light-cardHover'
                            }`}
                    >
                        <FaGithub size={20} />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full transition-all duration-300 ${darkMode
                                ? 'text-dark-textMuted hover:text-dark-accent hover:bg-dark-cardHover'
                                : 'text-light-textMuted hover:text-light-accent hover:bg-light-cardHover'
                            }`}
                    >
                        <FaLinkedin size={20} />
                    </a>
                    <a
                        href="mailto:example@email.com"
                        className={`p-2 rounded-full transition-all duration-300 ${darkMode
                                ? 'text-dark-textMuted hover:text-dark-accent hover:bg-dark-cardHover'
                                : 'text-light-textMuted hover:text-light-accent hover:bg-light-cardHover'
                            }`}
                    >
                        <FaEnvelope size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
