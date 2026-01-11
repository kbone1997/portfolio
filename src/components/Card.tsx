import React, { useState } from 'react';
import '../App.css';

interface CardComponentProps {
    title: string;
    image: string;
    text: string;
    backText: string;
    backTitle: string;
    darkMode: boolean;
}

const CardComponent: React.FC<CardComponentProps> = ({ title, backTitle, image, text, backText, darkMode }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            className={`rounded-2xl p-4 cursor-pointer card-container hover-lift ${darkMode
                ? 'bg-dark-cardHover border border-dark-border hover-lift-dark'
                : 'bg-light-cardHover border border-light-border hover-lift-light'
                }`}
            onClick={handleClick}
            style={{
                width: '16rem',
                height: '26rem',
                perspective: '1000px',
                transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
        >
            <div className="card-inner" style={{ width: '100%', height: '100%', position: 'relative' }}>
                {/* Front */}
                <div className="card-front flex flex-col justify-between p-3">
                    <img
                        src={image}
                        className="rounded-xl w-full h-40 object-cover"
                        alt={title}
                    />
                    <div className="flex flex-col justify-center items-center mt-4">
                        <h5 className={`text-lg font-bold mb-2 ${darkMode ? 'gradient-text-dark' : 'gradient-text-light'
                            }`}>
                            {title}
                        </h5>
                        <p className={`text-sm text-center ${darkMode ? 'text-dark-textMuted' : 'text-light-textMuted'
                            }`} style={{ whiteSpace: 'pre-line' }}>
                            {text}
                        </p>
                    </div>
                </div>

                {/* Back */}
                <div className="card-back flex flex-col justify-between p-3">
                    {(title === "INFO INLET" || title === "QUADQUE TECHNOLOGIES PYT") ? (
                        <div className="flex justify-center items-center h-40">
                            <img
                                src={image}
                                className={`w-24 h-24 rounded-full border-4 ${darkMode ? 'border-dark-accent' : 'border-light-accent'
                                    }`}
                                alt={title}
                            />
                        </div>
                    ) : (
                        <img
                            src={image}
                            className="rounded-xl w-full h-40 object-cover"
                            alt={title}
                        />
                    )}
                    <div className="flex flex-col justify-center items-center mt-4">
                        <h5 className={`text-lg font-bold mb-2 ${darkMode ? 'gradient-text-dark' : 'gradient-text-light'
                            }`}>
                            {backTitle}
                        </h5>
                        <p className={`text-sm text-center ${darkMode ? 'text-dark-textMuted' : 'text-light-textMuted'
                            }`} style={{ whiteSpace: 'pre-line' }}>
                            {backText}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
