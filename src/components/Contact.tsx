import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="min-h-screen p-8 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-4">Contact</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Name</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input type="email" className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Message</label>
                        <textarea className="w-full p-2 border border-gray-300 rounded"></textarea>
                    </div>
                    <button type="submit" className="bg-gray-900 text-white px-4 py-2 rounded">Send</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
