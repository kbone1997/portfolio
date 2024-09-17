import React, { useState } from 'react';
import '../App.css';

interface CardComponentProps {
    title: string;
    image: string;
    text: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ title, image, text }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="flex items-center justify-center cursor-pointer w-full h-full m-4" onClick={handleClick}>
            <div className='flex rounded-xl p-4 shadow-md border-2 border-transparent dark:hover:border-violet-400 hover:border-colorDeepGreenish bg-sectionBackground dark:bg-sectionBackgroundDark justify-center items-center card-container'>
                <div className={`hover:translate-y-3 hover:shadow-2xl card ${isFlipped ? ' transform-gpu rotate-y-180' : ''}`} style={{ width: '18rem', height: '30rem', borderRadius: '15px', }}>
                    <div className="card-inner">
                        <div className="card-front bg-glass backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg text-white">
                            <img src={image} className="card-img-top" alt={title} style={{ borderRadius: '10px' }} />
                            <div className="card-body">
                                <h5 className="text-xl dark:text-stone-600">{title}</h5>
                                <p className="text-base dark:text-stone-600" style={{ whiteSpace: 'pre-line' }}>{text}</p>
                            </div>
                        </div>
                        <div className="card-back">
                            <img src={image} className="card-img-top" alt={title} />
                            <div className="card-body">
                                <h5 className="text-xl dark:text-stone-600">Backside</h5>
                                <p className="text-base dark:text-stone-600" >This is backside</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
