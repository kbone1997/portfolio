import React, { useRef, useState } from 'react';
import "./App.css"; // Use for any additional custom styles if necessary
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Career from './components/Career';
import Contact from './components/Contact';
import background from "./assets/images/firstBg.jpg"
import {
  useScroll,
  useTransform,
} from 'framer-motion';
import MultiLayer from './components/multilayer';


const App: React.FC = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollY, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollY, [0, 1], ["0%", "200%"]);

  return (
    <div className="flex flex-col min-h-screen font-sans " ref={ref} >
      <Header />
      <main className="flex flex-col">
        <MultiLayer></MultiLayer>
        <Home />
        <About />
        <Career />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
