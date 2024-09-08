import React from 'react';
import '../App.css'


const Footer: React.FC = () => {
    return (
        <footer className="text-3xl font-bold underline text-center">
            <p>&copy; {new Date().getFullYear()} My Portfolio Check. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
