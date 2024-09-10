import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import python from '../assets/icons/icons8-python.gif';
import javascript from '../assets/icons/icons8-javascript.gif';
import java from '../assets/icons/icons8-java.gif';
import typescript from '../assets/icons/icons8-typescript-48.png';
import django from '../assets/icons/icons8-django-48.png';
import flutter from '../assets/icons/icons8-flutter-48.png';
import html from '../assets/icons/icons8-html.gif';
import nextjs from '../assets/icons/icons8-nextjs-48.png';
import postgresql from '../assets/icons/icons8-postgresql-48.png';
import mysql from '../assets/icons/icons8-database.gif';
import tailwind from '../assets/icons/icons8-tailwind-css-48.png';
import firebase from '../assets/icons/icons8-google-firebase-console-48.png';
import react from '../assets/icons/icons8-react.gif';
import mac from '../assets/icons/icons8-mac-logo-48.png';
import windows from '../assets/icons/icons8-windows-10-48.png';
import linux from '../assets/icons/icons8-linux.gif';

const Home: React.FC = () => {
    return (
        <section id="home" className="flex items-center justify-center w-full h-screen p-24 bg-primaryBackground dark:bg-secondaryBackgroundDark">

            <div className="bg-secondaryBackground dark:bg-subBackGroundDark rounded-lg shadow-md p-6  flex flex-col h-full w-5/6 gap-3">

                <h2 className="text-xl font-bold text-center dark:text-white">Technologies</h2>
                <div className='flex flex-row w-full h-1/2 gap-3'>
                    <div className='flex flex-col h-full w-1/2 shadow-md border-2 border-transparent dark:hover:border-violet-400 hover:border-colorDeepGreenish bg-sectionBackground dark:bg-sectionBackgroundDark rounded-md p-2'>
                        <h2 className="text-xl mb-4 text-center dark:text-white">Programming Languages</h2>
                        <div className="flex flex-wrap justify-center gap-1">
                            <SkillCard image={javascript} alt="JavaScript" label="JavaScript" />
                            <SkillCard image={typescript} alt="TypeScript" label="TypeScript" />
                            <SkillCard image={python} alt="Python" label="Python" />
                            <SkillCard image={java} alt="Java" label="Java" />
                        </div>
                    </div>
                    <div className='flex flex-col h-full w-1/2 shadow-md border-2 border-transparent dark:hover:border-violet-400 hover:border-colorDeepGreenish bg-sectionBackground dark:bg-sectionBackgroundDark rounded-md p-2'>
                        <h2 className="text-xl mb-4 text-center dark:text-white">Web and Mobile Programming and Technologies</h2>
                        <div className="flex flex-wrap justify-center gap-1">
                            <SkillCard image={react} alt="React" label="React" />
                            <SkillCard image={flutter} alt="flutter" label="flutter" />
                            <SkillCard image={nextjs} alt="Next.js" label="Next.js" />
                            <SkillCard image={html} alt="HTML" label="HTML" />
                            <SkillCard image={tailwind} alt="Tailwind CSS" label="Tailwind CSS" />
                        </div>
                    </div>
                </div>
                <div className='flex flex-row w-full h-1/2 gap-3'>
                    <div className='flex flex-col h-full w-1/2 shadow-md border-2 border-transparent dark:hover:border-violet-400 hover:border-colorDeepGreenish bg-sectionBackground dark:bg-sectionBackgroundDark rounded-md p-2'>
                        <h2 className="text-xl mb-4 text-center dark:text-white">Databases and Backend</h2>
                        <div className="flex flex-wrap justify-center gap-1">
                            <SkillCard image={mysql} alt="MySQL" label="MySQL" />
                            <SkillCard image={postgresql} alt="PostgreSQL" label="PostgreSQL" />
                            <SkillCard image={django} alt="Django" label="Django" />
                            <SkillCard image={firebase} alt="Firebase" label="Firebase" />
                        </div>
                    </div>
                    <div className='flex flex-col h-full w-1/2 shadow-md border-2 border-transparent dark:hover:border-violet-400 hover:border-colorDeepGreenish bg-sectionBackground dark:bg-sectionBackgroundDark rounded-md p-2'>
                        <h2 className="text-xl mb-4 text-center dark:text-white">Operating Systems</h2>
                        <div className="flex flex-wrap justify-center gap-1">
                            <SkillCard image={windows} alt="Windows" label="Windows" />
                            <SkillCard image={mac} alt="Mac" label="Mac" />
                            <SkillCard image={linux} alt="Linux" label="Linux" />
                        </div>
                    </div>
                </div>
            </div>

        </section >
    );
};

interface SkillCardProps {
    image: string;
    alt: string;
    label: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ image, alt, label }) => {
    return (
        <div className="cursor-pointer flex flex-col justify-center items-center border-2 border-transparent hover:border-colorDeepGreenish hover:dark:border-violet-400 p-4 rounded-md">
            <img src={image} alt={alt} className="w-12 h-12 rounded-md" />
            <p className="text-sm dark:text-white">{label}</p>
        </div>
    );
};

export default Home;
