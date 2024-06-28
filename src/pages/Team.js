import React from 'react';
import bg from '../assets/team.jpg'; 
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Team = () => {
  const teamMembers = [
    { name: 'Dr. Naveed Ahmad', role: 'Director Building Energy Research Center UET Peshawar' },
    { name: 'Jane Smith', role: 'Project Manager' },
    { name: 'Sam Wilson', role: 'UX Designer' },
    { name: 'Lisa Kudrow', role: 'Backend Engineer' },
    { name: 'Michael Johnson', role: 'QA Engineer' },
    { name: 'Emily Davis', role: 'Frontend Developer' },
  ];

  // Split the team members into two halves
  const halfLength = Math.ceil(teamMembers.length / 2);
  const firstHalf = teamMembers.slice(0, halfLength);
  const secondHalf = teamMembers.slice(halfLength);

  return (
    <div>
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

      <section id="team" className="h-screen flex">
        <div 
          className="w-1/2 flex flex-col items-center justify-center p-10 bg-white" 
         
        >
        </div>
        <div 
          className="w-1/2 h-full"
          style={{ backgroundColor: 'rgb(232, 255, 174)' }}
        >
        </div>
      </section>
    </div>
  );
};

export default Team;
