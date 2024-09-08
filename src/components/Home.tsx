import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import python from './icons/icons8-python.gif';
import javascript from './icons/icons8-javascript.gif';
import java from './icons/icons8-java.gif';
import typescript from './icons/icons8-typescript-48.png';
import django from './icons/icons8-django-48.png';
import flutter from './icons/icons8-flutter-48.png';
import html from './icons/icons8-html.gif';
import nextjs from './icons/icons8-nextjs-48.png';
import postgresql from './icons/icons8-postgresql-48.png';
import mysql from './icons/icons8-database.gif';
import tailwind from './icons/icons8-tailwind-css-48.png';
import firebase from './icons/icons8-google-firebase-console-48.png';
import react from './icons/icons8-react.gif';
import mac from './icons/icons8-mac-logo-48.png';
import windows from './icons/icons8-windows-10-48.png';
import linux from './icons/icons8-linux.gif';

const Home: React.FC = () => {
    return (
        <section id="home" className="flex items-center justify-center h-screen overflow-y-scroll mt-20">
            <div className="bg-white rounded-lg shadow-md p-6 h-auto w-75">
                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4 text-center">Programming Languages</h2>
                    <div className="flex flex-wrap justify-center border-solid border-1 hover:bg-slate-300">
                        <SkillCard image={javascript} alt="JavaScript" label="JavaScript" />
                        <SkillCard image={typescript} alt="TypeScript" label="TypeScript" />
                        <SkillCard image={python} alt="Python" label="Python" />
                        <SkillCard image={java} alt="Java" label="Java" />
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4 text-center">Web and Mobile Programming and Technologies</h2>
                    <div className="flex flex-wrap justify-center border-2 hover:bg-slate-300">
                        <SkillCard image={react} alt="React" label="React" />
                        <SkillCard image={flutter} alt="flutter" label="flutter" />
                        <SkillCard image={nextjs} alt="Next.js" label="Next.js" />
                        <SkillCard image={html} alt="HTML" label="HTML" />
                        <SkillCard image={tailwind} alt="Tailwind CSS" label="Tailwind CSS" />
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4 text-center">Databases and Backend</h2>
                    <div className="flex flex-wrap justify-center border-2 hover:bg-slate-300">
                        <SkillCard image={mysql} alt="MySQL" label="MySQL" />
                        <SkillCard image={postgresql} alt="PostgreSQL" label="PostgreSQL" />
                        <SkillCard image={django} alt="Django" label="Django" />
                        <SkillCard image={firebase} alt="Firebase" label="Firebase" />
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4 text-center">Operating Systems</h2>
                    <div className="flex flex-wrap justify-center border-2 hover:bg-slate-300">
                        <SkillCard image={windows} alt="Windows" label="Windows" />
                        <SkillCard image={mac} alt="Mac" label="Mac" />
                        <SkillCard image={linux} alt="Linux" label="Linux" />
                    </div>
                </div>
            </div>
        </section>
    );
};

interface SkillCardProps {
    image: string;
    alt: string;
    label: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ image, alt, label }) => {
    return (
        <div className="text-center m-4">
            <img src={image} alt={alt} className="block mx-auto rounded-lg mb-2" style={{ maxWidth: '150px', maxHeight: '150px' }} />
            <p className="text-sm font-medium">{label}</p>
        </div>
    );
};

export default Home;
