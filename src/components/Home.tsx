import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import icons from './static/icons';
import { Tooltip } from 'flowbite-react';

const Home: React.FC = () => {
    return (
        <section id="home" className="flex items-center justify-center w-full h-screen p-24 bg-primaryBackground dark:bg-secondaryBackgroundDark">
            <div className="bg-secondaryBackground dark:bg-subBackGroundDark rounded-lg shadow-md p-6  flex flex-col h-full w-5/6 gap-3">
                <div className='w-full h-full flex flex-col gap-3 overflow-y-auto'>
                    <h2 className="text-3xl font-bold text-center p-0 m-0 dark:text-white">Technologies</h2>
                    <div className='flex flex-row w-full h-1/2 gap-3'>
                        <div className='flex flex-col h-full w-1/2 shadow-md border-2 border-transparent dark:hover:border-violet-500 hover:border-colorDeepGreenish bg-sectionBackground dark:bg-sectionBackgroundDark rounded-md p-2'>
                            <h2 className="text-xl mb-4 text-center dark:text-white">Programming Languages</h2>
                            <div className="flex flex-wrap justify-center gap-1 overflow-y-auto">
                                <SkillCard image={icons.javascript} alt="JavaScript" label="JavaScript" />
                                <SkillCard image={icons.typescript} alt="TypeScript" label="TypeScript" />
                                <SkillCard image={icons.python} alt="Python" label="Python" />
                                <SkillCard image={icons.java} alt="Java" label="Java" />
                            </div>
                        </div>
                        <div className='custom-scrollbar flex flex-col h-full w-1/2 shadow-md border-2 border-transparent dark:hover:border-violet-500 hover:border-colorDeepGreenish bg-sectionBackground dark:bg-sectionBackgroundDark rounded-md p-2'>
                            <h2 className="text-xl mb-4 text-center dark:text-white">Web and Mobile Programming and Technologies</h2>
                            <div className="flex flex-wrap justify-center gap-1 overflow-y-auto">
                                <SkillCard image={icons.react} alt="React" label="React" />
                                <SkillCard image={icons.nextjs} alt="Next.js" label="Next.js" />
                                <SkillCard image={icons.reactNative} alt="Next.js" label="React Native" />
                                <SkillCard image={icons.flutter} alt="flutter" label="flutter" />
                                <SkillCard image={icons.html} alt="HTML" label="HTML" />
                                <SkillCard image={icons.tailwind} alt="Tailwind CSS" label="Tailwind CSS" />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row w-full h-1/2 gap-3'>
                        <div className='flex flex-col h-full w-1/2 shadow-md border-2 border-transparent dark:hover:border-violet-500 hover:border-colorDeepGreenish bg-sectionBackground dark:bg-sectionBackgroundDark rounded-md p-2'>
                            <h2 className="text-xl mb-4 text-center dark:text-white">Databases and Backend</h2>
                            <div className="flex flex-wrap justify-center gap-1 overflow-y-auto">
                                <SkillCard image={icons.mysql} alt="MySQL" label="MySQL" />
                                <SkillCard image={icons.postgresql} alt="PostgreSQL" label="PostgreSQL" />
                                <SkillCard image={icons.django} alt="Django" label="Django" />
                                <SkillCard image={icons.firebase} alt="Firebase" label="Firebase" />
                            </div>
                        </div>
                        <div className='flex flex-col h-full w-1/2 shadow-md border-2 border-transparent dark:hover:border-violet-500 hover:border-colorDeepGreenish bg-sectionBackground dark:bg-sectionBackgroundDark rounded-md p-2'>
                            <h2 className="text-xl mb-4 text-center dark:text-white">Operating Systems</h2>
                            <div className="flex flex-wrap justify-center gap-1 overflow-y-auto">
                                <SkillCard image={icons.windows} alt="Windows" label="Windows" />
                                <SkillCard image={icons.mac} alt="Mac" label="Mac" />
                                <SkillCard image={icons.linux} alt="Linux" label="Linux" />
                            </div>
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
        <Tooltip arrow={false} className='relative p-0 m-0 font-medium' placement='bottom' content={<span className="bg-violet-500 px-2 py-1 rounded-lg">Tooltip content</span>}>
            <div className="cursor-pointer flex flex-col justify-center items-center border-2 border-transparent hover:border-colorDeepGreenish hover:dark:border-violet-500 p-4 rounded-md">
                <img src={image} alt={alt} className="w-12 h-12 rounded-md" />
                <p className="text-sm dark:text-white">{label}</p>
            </div>
        </Tooltip>
    );
};

export default Home;
