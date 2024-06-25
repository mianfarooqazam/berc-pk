import React from 'react';
import AnimatedText from '../components/AnimatedText';

const Home = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-blue-100">
      <h1 className="text-4xl font-bold">Home Section</h1>
      <AnimatedText />
    </section>
  );
};

export default Home;
