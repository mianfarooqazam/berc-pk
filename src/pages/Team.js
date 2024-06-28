import React from 'react';
import bg from '../assets/team.jpg'; 

const Team = () => {
  return (
    <section id="team" className="h-screen flex">
      <div 
        className="w-1/2 flex flex-col items-center justify-center p-10" 
        style={{ backgroundColor: 'rgb(232, 255, 174)' }}
      >
        <h1 
          className="font-bold text-center mb-4 font-medium" 
          style={{ fontSize: '40px', marginTop: '40px' }}
        >
          We bring a wealth of skills and experience from a wide range of backgrounds.
        </h1>
        <p 
          className="text-center font-thin" 
          style={{ fontSize: '20px', marginTop: '20px' }}
        >
          Our philosophy is simple; hire great people and give them the resources and support to do their best work.
        </p>
      </div>
      <div 
        className="w-1/2 h-full"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >
      </div>
    </section>
  );
};

export default Team;
