import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/Loading.json';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default Loader;
