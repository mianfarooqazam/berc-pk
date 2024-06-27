import React from 'react';
import AnimatedText from '../components/AnimatedText';
import bg from '../assets/b6.jpg'; 

const Home = () => {
  return (
    <section id="home" className="relative h-screen flex">
      <div 
        className="w-2/5 h-full flex items-center justify-center" 
        style={{ 
          background: 'linear-gradient(180deg, hsla(190, 34%, 57%, 1) 0%, hsla(187, 48%, 77%, 1) 100%)'
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
  );
};

export default Home;
