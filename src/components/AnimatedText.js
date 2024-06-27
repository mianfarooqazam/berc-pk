import React, { useState, useEffect } from 'react';

const AnimatedText = () => {
  const words = ['Energy-Efficient', 'Sustainable', 'Cutting-Edge', 'Eco-Friendly', 'Smart'];
  const colors = ['text-purple-500', 'text-red-500', 'text-yellow-500', 'text-blue-500', 'text-green-500'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex items-end justify-center pb-12">
      <div className="text-center">
        <h1 className="font-thin" style={{ fontSize: '70px' }}>Construction</h1>
        <h1 className="font-thin" style={{ fontSize: '70px' }}>with an approach that is</h1>
        <div className="flex justify-center items-center" style={{ width: '400px', margin: '0 auto', whiteSpace: 'nowrap' }}>
          <span className={`${colors[currentIndex]} transition-all duration-500`} style={{ fontSize: '60px' }}>
            {words[currentIndex]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedText;
