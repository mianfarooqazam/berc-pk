import React, { useState, useEffect } from 'react';

const AnimatedText = () => {
  const words = ['fast', 'experienced', 'dedicated'];
  const colors = ['text-purple-500', 'text-red-500', 'text-yellow-500'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">
        Our team is {' '}
        <span className={`${colors[currentIndex]} transition-all duration-500`}>
          {words[currentIndex]}
        </span>
      </h1>
    </div>
  );
};

export default AnimatedText;
