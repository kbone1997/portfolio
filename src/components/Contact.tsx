import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import CardComponent from './Card';
import noor from '../assets/icons/noor.jpg'
import uiu from '../assets/icons/uiu.jpg'

function Contact() {
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
    ];

    return (
        <section id="contact" className="flex items-center justify-center w-full h-screen bg-primaryBackground dark:bg-secondaryBackgroundDark">

            <div className="w-3/4 h-4/5 p-4 bg-secondaryBackground dark:bg-subBackGroundDark rounded-xl flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold mb-4 dark:text-white text-center">Contact</h2>
                <form className="space-y-4 w-2/4">
                    <div>
                        <label className="block dark:text-white">Name</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div>
                        <label className="block dark:text-white">Email</label>
                        <input type="email" className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div>
                        <label className="block dark:text-white">Message</label>
                        <textarea className="w-full p-2 border border-gray-300 rounded"></textarea>
                    </div>
                    <div className='w-full flex justify-end'>
                        <button type="submit" className="w-1/5 bg-colorGreenish dark:bg-sectionBackgroundDark hover:bg-violet-500 hover:text-white dark:text-white px-4 py-2 rounded">Send</button>
                    </div>
                </form>
            </div>

        </section>
    );
}

export default Contact;
