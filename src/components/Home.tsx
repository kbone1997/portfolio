import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import icons from './static/icons';
import { Tooltip } from 'flowbite-react';
import technologies from './static/technologies';

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
                                {
                                    technologies[0].map((data) => (
                                        <SkillCard image={data.icon} alt={data.name} label={data.name} proficiency={data.proficiency} Professional_Experience={data.Professional_Experience} />
                                    ))
                                }
                            </div>
                        </div>
                        <div className='custom-scrollbar flex flex-col h-full w-1/2 shadow-md border-2 border-transparent dark:hover:border-violet-500 hover:border-colorDeepGreenish bg-sectionBackground dark:bg-sectionBackgroundDark rounded-md p-2'>
                            <h2 className="text-xl mb-4 text-center dark:text-white">Web and Mobile Programming and Technologies</h2>
                            <div className="flex flex-wrap justify-center gap-1 overflow-y-auto">
                                {
                                    technologies[1].map((data) => (
                                        <SkillCard image={data.icon} alt={data.name} label={data.name} proficiency={data.proficiency} Professional_Experience={data.Professional_Experience} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row w-full h-1/2 gap-3'>
                        <div className='flex flex-col h-full w-1/2 shadow-md border-2 border-transparent dark:hover:border-violet-500 hover:border-colorDeepGreenish bg-sectionBackground dark:bg-sectionBackgroundDark rounded-md p-2'>
                            <h2 className="text-xl mb-4 text-center dark:text-white">Databases and Backend</h2>
                            <div className="flex flex-wrap justify-center gap-1 overflow-y-auto">
                                {
                                    technologies[2].map((data) => (
                                        <SkillCard image={data.icon} alt={data.name} label={data.name} proficiency={data.proficiency} Professional_Experience={data.Professional_Experience} />
                                    ))
                                }
                            </div>
                        </div>
                        <div className='flex flex-col h-full w-1/2 shadow-md border-2 border-transparent dark:hover:border-violet-500 hover:border-colorDeepGreenish bg-sectionBackground dark:bg-sectionBackgroundDark rounded-md p-2'>
                            <h2 className="text-xl mb-4 text-center dark:text-white">Operating Systems</h2>
                            <div className="flex flex-wrap justify-center gap-1 overflow-y-auto">
                                {
                                    technologies[3].map((data) => (
                                        <SkillCard image={data.icon} alt={data.name} label={data.name} proficiency={data.proficiency} Professional_Experience={data.Professional_Experience} />
                                    ))
                                }
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
    proficiency: string;
    Professional_Experience: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ image, alt, label, proficiency, Professional_Experience }) => {
    return (
        <Tooltip
            arrow={false}
            className='relative p-0 m-0 font-medium '
            placement='bottom'
            content=
            {
                <div className='flex flex-col rounded-xl '>
                    <span
                        className="bg-colorGreenish dark:bg-violet-500 px-2 py-1 border-b-2">
                        Proficiency: {proficiency}
                    </span>
                    <div className='flex flex-row bg-colorGreenish dark:bg-violet-500 justify-center items-center'>
                        <span
                            className=" px-2 py-1">
                            Experience:
                        </span>
                        <img className='w-6 h-6 ' src={Professional_Experience ? icons.acceptLight : icons.remove}></img>
                    </div>

                </div>
            }>
            <div className="cursor-pointer flex flex-col justify-center items-center border-2 border-transparent hover:border-colorDeepGreenish hover:dark:border-violet-500 p-4 rounded-md">
                <img src={image} alt={alt} className="w-12 h-12 rounded-md" />
                <p className="text-sm dark:text-white">{label}</p>
            </div>
        </Tooltip>
    );
};

export default Home;
