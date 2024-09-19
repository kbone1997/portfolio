import React, { useState } from 'react';
import '../App.css';

interface CardComponentProps {
    title: string;
    image: string;
    text: string;
    backText: string;
    backTitle: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ title, backTitle, image, text, backText }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="flex items-center justify-center cursor-pointer w-full h-full m-4" onClick={handleClick}>
            <div className='flex rounded-xl p-4 shadow-md border-2 border-transparent dark:hover:border-violet-500 hover:border-colorDeepGreenish bg-sectionBackground dark:bg-sectionBackgroundDark justify-center items-center card-container'>
                <div className={`z-10 hover:translate-y-3 hover:shadow-2xl card ${isFlipped ? ' transform-gpu rotate-y-180' : ''}`} style={{ width: '18rem', height: '30rem', borderRadius: '15px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                    <div className="card-inner">
                        <div className="card-front ">
                            <img src={image} className="card-img-top" alt={title} style={{ borderRadius: '10px' }} />
                            <div className="card-body">
                                <h5 className="text-xl font-semibold dark:text-white">{title}</h5>
                                <p className="text-base dark:text-white" style={{ whiteSpace: 'pre-line' }}>{text}</p>
                            </div>
                        </div>
                        <div className="card-back">
                            {
                                title === "INFO INLET" || title === "QUADQUE TECHNOLOGIES PYT" ? (
                                    <div className='flex justify-center items-center p-2'>
                                        <img src={image} className="w-2/3 h-1/2 rounded-full border-4" alt={title} />
                                    </div>
                                ) : (
                                    <img src={image} className="card-img-top" alt={title} />
                                )
                            }
                            <div className="card-body">
                                <h5 className="text-xl font-semibold dark:text-white">{backTitle}</h5>
                                <p className="text-base dark:text-white" style={{ whiteSpace: 'pre-line' }}>{backText}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
