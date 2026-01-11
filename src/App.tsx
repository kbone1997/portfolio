import React, { useRef } from 'react';
import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Career from './components/Career';
import MultiLayer from './components/multilayer';

const App: React.FC = () => {
  const ref = useRef(null);

  return (
    <div className="flex flex-col min-h-screen font-sans" ref={ref}>
      <Analytics />
      <Header />
      <main className="flex flex-col">
        <MultiLayer />
        <Home />
        <About />
        <Career />
      </main>
      <Footer />
    </div>
  );
};

export default App;
