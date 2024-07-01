import React from 'react';
import AnimatedText from '../components/AnimatedText';
import bg from '../assets/b6.jpg'; 

const Home = () => {
  return (
    <>
      <section className="w-full bg-white p-8 text-center mt-16">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Buildings Energy Research Center Pakistan</h1>
        <h2 className="text-xl font-semibold text-gray-600">Transformation of Buildings in Pakistan: A Pathway Towards Green, Sustainable and Zero Energy Buildings</h2>
      </section>
      <section id="home" className="relative h-screen flex">
        <div 
          className="w-2/5 h-full flex items-center justify-center" 
          style={{ 
            background: 'linear-gradient(to bottom, rgb(210, 223, 232) 0%, rgba(255, 192, 203, 0.2) 100%)'
          }}
        >
          <AnimatedText />
        </div>
        <div 
          className="w-3/5 h-full bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(${bg})`
          }}
        ></div>
      </section>
    </>
  );
};

export default Home;
