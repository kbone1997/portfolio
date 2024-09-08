import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import CardComponent from './Card';
import noor from './icons/noor.jpg'
import uiu from './icons/uiu.jpg'

function About() {
    const timelineData = [
        {
            title: "School",
            image: noor,
            text: "Description about my school life."
        },
        {
            title: "College",
            image: noor,
            text: "Description about my college life."
        },
        {
            title: "University",
            image: uiu,
            text: "Description about my university life."
        },
    ];

    return (
        <section id="home" className="d-flex align-items-center justify-content-center bg-light" style={{ height: '100vh', overflow: 'hidden' }}>
            <div className="text-center bg-white rounded-lg p-4 h-75 w-75 shadow-md hover-shadow-red transition transform-hover timeline">
                <h2 className="text-xl font-bold text-center">Educational Backgound</h2>
                <div className="timeline-container h-100 d-flex justify-content-center">
                    {timelineData.map((data, index) => (
                        <div key={index} className={`timeline-card`}>
                            <CardComponent title={data.title} image={data.image} text={data.text} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;
