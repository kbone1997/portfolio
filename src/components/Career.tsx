import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import CardComponent from './Card';
import infoInlet from '../assets/icons/info_inlet_logo (1).png';
import quadque from '../assets/icons/quadque.png';

function Career() {
    const timelineData = [
        {
            title: "INFO INLET",
            backTitle: "Technologies:",
            image: infoInlet,
            text: "Software Engineer \nFlutter Developer",
            backText: "\nFlutter \nReactjs \ntypescript \njavascript \nnextjs \nexpressJs \nDocker"
        },
        {
            title: "QUADQUE TECHNOLOGIES PYT",
            backTitle: "Technologies:",
            image: quadque,
            text: "Software Engineer \nFrontend Oriented Fullstack",
            backText: "\nReactjs \ntypescript \njavascript \nnextjs \nNodeJS \nTailwindcss / Framer Motion"
        },
    ];

    return (
        <section id="career" className="flex items-center justify-center w-full h-screen bg-primaryBackground dark:bg-secondaryBackgroundDark">
            <div className="bg-secondaryBackground dark:bg-subBackGroundDark flex flex-col text-center rounded-lg p-4 w-3/4 h-4/5 shadow-md hover-shadow-red transition transform-hover timeline">
                <h2 className="text-3xl font-bold text-center dark:text-white">Career</h2>
                <div className="w-full h-full flex flex-row overflow-x-auto">
                    {timelineData.map((data, index) => (
                        <div key={index} className={"flex w-full h-full items-center justify-center"}>
                            <CardComponent title={data.title} image={data.image} text={data.text} backText={data.backText} backTitle={data.backTitle} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Career;
