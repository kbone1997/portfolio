import React, { useEffect, useState } from 'react';
import '../App.css';
import CardComponent from './Card';
import infoInlet from '../assets/icons/info_inlet_logo (1).png';
import quadque from '../assets/icons/quadque.png';

function Career() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const checkTheme = () => {
            setDarkMode(document.documentElement.classList.contains('dark'));
        };
        checkTheme();
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    const timelineData = [
        {
            title: "INFO INLET",
            backTitle: "Technologies",
            image: infoInlet,
            text: "Software Engineer\nFlutter Developer",
            backText: "Flutter\nReactJS\nTypeScript\nJavaScript\nNextJS\nExpressJS\nDocker"
        },
        {
            title: "QUADQUE TECHNOLOGIES PYT",
            backTitle: "Technologies",
            image: quadque,
            text: "Software Engineer\nFrontend Oriented Fullstack",
            backText: "ReactJS\nTypeScript\nJavaScript\nNextJS\nNodeJS\nTailwindCSS\nFramer Motion"
        },
    ];

    return (
        <section
            id="career"
            className={`flex items-center justify-center w-full min-h-screen py-20 px-4 md:px-8 ${darkMode ? 'bg-dark-bg' : 'bg-light-bg'
                }`}
        >
            <div className={`flex flex-col text-center rounded-2xl p-6 md:p-8 w-full max-w-5xl ${darkMode ? 'section-card-dark' : 'section-card-light'
                }`}>
                <h2 className={`text-3xl md:text-4xl font-bold text-center mb-8 ${darkMode ? 'gradient-text-dark' : 'gradient-text-light'
                    }`}>
                    Career Experience
                </h2>

                <div className="w-full flex flex-col md:flex-row gap-6 justify-center">
                    {timelineData.map((data, index) => (
                        <div key={index} className="flex flex-1 items-center justify-center">
                            <CardComponent
                                title={data.title}
                                image={data.image}
                                text={data.text}
                                backText={data.backText}
                                backTitle={data.backTitle}
                                darkMode={darkMode}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Career;
