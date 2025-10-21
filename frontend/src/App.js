import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Biography from './components/Biography';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App min-h-screen bg-cream">
      <Navbar />
      <main className="max-w-5xl mx-auto px-8 py-12">
        <Hero />
        <Biography />
        <Education />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
