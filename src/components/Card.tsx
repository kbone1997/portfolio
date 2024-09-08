import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <div className="card-container cursor-pointer" onClick={handleClick}>
            <div className={`card ${isFlipped ? 'flipped' : ''}`} style={{ width: '18rem', height: '30rem', borderRadius: '15px', backgroundColor: '#FCF3F6' }}>
                <div className="card-inner">
                    <div className="card-front">
                        <img src={image} className="card-img-top" alt={title} style={{ borderRadius: '10px' }} />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{text}</p>
                        </div>
                    </div>
                    <div className="card-back">
                        <img src={image} className="card-img-top" alt={title} />
                        <div className="card-body">
                            <h5 className="card-title">Backside</h5>
                            <p className="card-text">This is backside</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
