import React, { useEffect, useState } from 'react';
import '../App.css';
import CardComponent from './Card';
import noor from '../assets/icons/noor.jpg';
import uiu from '../assets/icons/uiu.jpg';

function About() {
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
            title: "School",
            backTitle: "Result",
            image: noor,
            text: "Bir Shrestha Noor Mohammad Rifles Public School and College\n\n2004 - 2015",
            backText: "SSC: 2015\nGPA: 5.00"
        },
        {
            title: "College",
            backTitle: "Result",
            image: noor,
            text: "Bir Shrestha Noor Mohammad Rifles Public School and College\n\n2015 - 2017",
            backText: "HSC: 2017\nGPA: 5.00"
        },
        {
            title: "University",
            backTitle: "Result",
            image: uiu,
            text: "United International University\n\n2018 - 2023",
            backText: "BSc CSE: 2018-2022\nCGPA: 3.38"
        },
    ];

    return (
        <section
            id="about"
            className={`flex items-center justify-center w-full min-h-screen py-20 px-4 md:px-8 ${darkMode ? 'bg-dark-bg' : 'bg-light-bg'
                }`}
        >
            <div className={`flex flex-col text-center rounded-2xl p-6 md:p-8 w-full max-w-6xl ${darkMode ? 'section-card-dark' : 'section-card-light'
                }`}>
                <h2 className={`text-3xl md:text-4xl font-bold text-center mb-8 ${darkMode ? 'gradient-text-dark' : 'gradient-text-light'
                    }`}>
                    Educational Background
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

export default About;
