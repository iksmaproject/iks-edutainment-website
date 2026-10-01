import React from 'react';
import SmoothScroll from './components/SmoothScroll';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Modules from './components/Modules';
import Team from './components/Team';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';

function App() {
  return (
    <SmoothScroll>
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Modules />
        <Team />
        <PrivacyPolicy />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

export default App;
