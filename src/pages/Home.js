

import React from 'react';
import AnimatedText from '../components/AnimatedText';
import bg from '../assets/City-1.jpg'; 

const Home = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text visibility */}
      <AnimatedText />
    </section>
  );
};

export default Home;
