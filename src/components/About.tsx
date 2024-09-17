import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import CardComponent from './Card';
import noor from '../assets/icons/noor.jpg'
import uiu from '../assets/icons/uiu.jpg'

function About() {
    const timelineData = [
        {
            title: "School",
            image: noor,
            text: "Bir Shrestha Noor Mohammad Rifles Public School and College. \n\n2004 - 2015"
        },
        {
            title: "College",
            image: noor,
            text: "Bir Shrestha Noor Mohammad Rifles Public School and College. \n\n2015 - 2017"
        },
        {
            title: "University",
            image: uiu,
            text: "United International university.\n\n2018 - 2023"
        },
    ];

    return (
        <section id="about" className="flex items-center justify-center w-full h-screen bg-primaryBackground dark:bg-secondaryBackgroundDark">
            <div className="bg-secondaryBackground dark:bg-subBackGroundDark flex flex-col text-center rounded-lg p-4 w-3/4 h-4/5 shadow-md hover-shadow-red transition transform-hover timeline">
                <h2 className="text-3xl font-bold text-center dark:text-white">Educational Backgound</h2>
                <div className="w-full h-full flex flex-row overflow-x-auto">
                    {timelineData.map((data, index) => (
                        <div key={index} className={"flex w-full h-full items-center justify-center"}>
                            <CardComponent title={data.title} image={data.image} text={data.text} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;
