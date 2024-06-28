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

      <section id="team-members" className="py-20" style={{ backgroundColor: 'rgb(232, 255, 174)' }}>
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-thin text-center mb-10" style={{ fontSize: '40px' }}>Meet Our Super Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <Avatar sx={{ width: 96, height: 96, mb: 4 }}>
                  <AccountCircleIcon sx={{ width: 96, height: 96 }} />
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
