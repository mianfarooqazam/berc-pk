import React from 'react';
import bg from '../assets/team.jpg'; 
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Team = () => {
  const teamMembers = [
    { name: 'Dr. Naveed Ahmad', role: 'Director Building Energy Research Center UET Peshawar' },
    { name: 'Dr. Fakhr e Alam', role: 'Team Lead Building Energy Research Center' },
    { name: 'Engr. Fazl e Yazdan', role: 'Team Lead Building Energy Research Center' },
    { name: 'Syed Waqas Ali Shah', role: 'Administrative Officer' },
    { name: 'Abid Ullah', role: 'Project Coordinator' },
    { name: 'Maidah Arshad', role: 'Communication and Promotional Expert' },
    { name: 'Essa Khan', role: 'Communication Expert Assistant' },
    { name: 'Mishal Haq', role: 'Graduate Engineer' },
    { name: 'Fahad Rashid', role: 'Senior Research Assistant' },
    { name: 'Kashif Khan', role: 'Research Assistant' },
    { name: 'Muhammad Osama Aziz', role: 'Research Associate' },
    { name: 'Rafi Ullah', role: 'Research Assistant' },
    { name: 'Engr: Muhammad Ilyas', role: 'Web Developer' },
    { name: 'Sajid Khan', role: 'Software Developer' },
    { name: 'Farooq Azam', role: 'UI/UX' },
    { name: 'Hamad Aftab', role: 'Graduate Engineer' },
    { name: 'Muhammad Abbas', role: 'Graduate Engineer' },
    { name: 'Usman Ur Rehman', role: 'Graduate Engineer' },
    { name: 'Zainab Akbar', role: 'Research Assistant' },
    { name: 'Iqra Hussain', role: 'Graduate Engineer' },
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

      <section id="team-members" className="flex">
        <div 
          className="w-full flex flex-col items-center justify-center p-10"
          style={{ backgroundColor: 'rgb(232, 255, 174)' }}
        >
          <div className="flex flex-wrap justify-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex justify-center">
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center" style={{ width: '250px', height: '300px' }}>
                  <Avatar sx={{ width: 96, height: 96, mb: 4 }}>
                    <AccountCircleIcon sx={{ width: 96, height: 96 }} />
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
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
