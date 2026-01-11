import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="flex items-center justify-center w-full min-h-screen bg-gradient-to-br from-primaryBackground via-secondaryBackground to-primaryBackground dark:from-primaryBackgroundDark dark:via-secondaryBackgroundDark dark:to-primaryBackgroundDark py-20 px-4 md:px-8">
            <div className="glass-effect dark:glass-effect-dark rounded-2xl p-6 md:p-8 flex flex-col justify-center items-center w-full max-w-2xl shadow-glass">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">
                    Get In Touch
                </h2>

                <form className="space-y-6 w-full" onSubmit={handleSubmit}>
                    <div>
                        <label className="block dark:text-gray-100 text-gray-800 font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="input-modern w-full text-gray-900 dark:text-white"
                            placeholder="Your name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block dark:text-gray-100 text-gray-800 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="input-modern w-full text-gray-900 dark:text-white"
                            placeholder="your.email@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block dark:text-gray-100 text-gray-800 font-semibold mb-2">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="input-modern w-full h-40 resize-none text-gray-900 dark:text-white"
                            placeholder="Your message here..."
                            required
                        />
                    </div>

                    <div className='w-full flex justify-end'>
                        <button
                            type="submit"
                            className="btn-modern"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
