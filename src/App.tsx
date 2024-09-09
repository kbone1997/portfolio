import React, { useState } from 'react';
import "./App.css"; // Use for any additional custom styles if necessary
import "./custom.css"; // Use for any additional custom styles if necessary
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Career from './components/Career';
import Contact from './components/Contact';
import background from "./assets/images/firstBg.jpg"
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const App: React.FC = () => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false
  });

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50
    }
  };

  console.log(entry);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow">
        <div className='w-full h-screen bg-black' >
          {/* Parallax Section */}
          <motion.div className="box" style={{ y: y1, x: -50 }} />
          <motion.div
            className="box"
            style={{ y: y2, x: 50, background: 'salmon' }}
          />
          <div style={{ height: 500 }} />
          <div style={{ position: 'fixed', top: 0, left: 0 }}>
            {' '}
            {'is in view? ' + inView}
          </div>
          <motion.div
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 2, ease: 'easeOut' }}
            ref={ref}
            className="magic"
          />
        </div>
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
