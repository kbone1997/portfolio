import React from 'react';

const Career: React.FC = () => {
    return (
        <section id="career" className="min-h-screen p-8 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-4">My Career</h2>
                <ul className="list-disc list-inside">
                    <li>Job 1 - Description</li>
                    <li>Job 2 - Description</li>
                    <li>Job 3 - Description</li>
                </ul>
            </div>
        </section>
    );
};

export default Career;
