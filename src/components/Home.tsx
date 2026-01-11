import { useEffect, useState } from 'react';
import '../App.css';
import technologies from './static/technologies';

const Home: React.FC = () => {
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

    const sectionClasses = [
        { title: "Programming Languages", data: technologies[0] },
        { title: "Web & Mobile", data: technologies[1] },
        { title: "Databases & Backend", data: technologies[2] },
        { title: "Operating Systems", data: technologies[3] },
    ];

    return (
        <section
            id="home"
            className={`flex items-center justify-center w-full min-h-screen p-4 md:p-8 lg:p-16 pt-24 ${darkMode ? 'bg-dark-bg' : 'bg-light-bg'
                }`}
        >
            <div className={`rounded-2xl p-6 md:p-8 flex flex-col w-full max-w-6xl gap-8 ${darkMode ? 'section-card-dark' : 'section-card-light'
                }`}>
                <h2 className={`text-3xl md:text-4xl font-bold text-center ${darkMode ? 'gradient-text-dark' : 'gradient-text-light'
                    }`}>
                    Technologies & Skills
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {sectionClasses.map((section, idx) => (
                        <div
                            key={idx}
                            className={`rounded-xl p-5 hover-lift ${darkMode
                                    ? 'bg-dark-cardHover border border-dark-border hover-lift-dark'
                                    : 'bg-light-cardHover border border-light-border hover-lift-light'
                                }`}
                        >
                            <h3 className={`text-lg font-semibold mb-4 text-center ${darkMode ? 'text-dark-text' : 'text-light-text'
                                }`}>
                                {section.title}
                            </h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {section.data.map((data, i) => (
                                    <SkillCard
                                        key={i}
                                        image={data.icon}
                                        alt={data.name}
                                        label={data.name}
                                        proficiency={data.proficiency}
                                        Professional_Experience={data.Professional_Experience}
                                        darkMode={darkMode}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

interface SkillCardProps {
    image: string;
    alt: string;
    label: string;
    proficiency: string;
    Professional_Experience: boolean;
    darkMode: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ image, alt, label, proficiency, Professional_Experience, darkMode }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <div className={`cursor-pointer flex flex-col items-center p-3 rounded-xl transition-all duration-300 ${darkMode ? 'skill-card-dark' : 'skill-card-light'
                }`}>
                <img src={image} alt={alt} className="w-10 h-10 md:w-12 md:h-12 rounded-lg" />
                <p className={`text-xs md:text-sm text-center mt-2 font-medium ${darkMode ? 'text-dark-text' : 'text-light-text'
                    }`}>
                    {label}
                </p>
            </div>

            {/* Custom Tooltip */}
            {showTooltip && (
                <div
                    className={`absolute z-50 left-1/2 -translate-x-1/2 top-full mt-2 rounded-lg overflow-hidden shadow-lg whitespace-nowrap ${darkMode ? 'tooltip-dark' : 'tooltip-light'
                        }`}
                >
                    <div className="px-3 py-2 text-white text-sm font-medium">
                        Proficiency: {proficiency}
                    </div>
                    <div className="px-3 py-2 text-white text-sm font-medium border-t border-white/20">
                        {Professional_Experience ? '✓ Professional Experience' : '📚 Learning'}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
