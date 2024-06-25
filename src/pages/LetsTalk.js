import React from 'react';
import bg from '../assets/City-1.jpg'; 

const LetsTalk = () => {
  return (
    <section 
      id="lets-talk" 
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text visibility */}
      <h1 className="relative text-4xl font-bold text-white">Let's Talk Section</h1>
    </section>
  );
};

export default LetsTalk;
