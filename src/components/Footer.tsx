import React from 'react';
import '../App.css'


const Footer: React.FC = () => {
    return (
        <footer className="text-xl font-bold underline text-center dark:text-white bg-primaryBackground dark:bg-secondaryBackgroundDark">
            <p>&copy; {new Date().getFullYear()} My Portfolio Check. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
