import React from 'react';
import "../src/"
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Career from './components/Career';
import Contact from './components/Contact';

const App: React.FC = () => {

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow">
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
