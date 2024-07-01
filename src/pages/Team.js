import React, { useState } from 'react';
import bg from '../assets/team.jpg'; 
import Avatar from '@mui/material/Avatar';
import Modal from '../components/modal/modal';
import teamMembers from '../components/data/TeamMembers';

const Team = () => {
  const [open, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState({});

  const handleClickOpen = (member) => {
    setSelectedMember(member);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <section id="team" className="h-screen flex">
        <div 
          className="w-1/2 flex flex-col items-center justify-center p-10" 
          style={{ backgroundColor: '#fff' }}
        >
          <h1 
            className="text-center mb-4 font-medium" 
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

      <header className="w-full py-2" style={{ backgroundColor: '#ffff' }}>
        <h1 
          className="text-center font-medium" 
          style={{ fontSize: '40px', marginTop: '40px' }}
        >
          Meet our Super Team
        </h1>
      </header>

      <section id="team-members" className="flex">
        <div 
          className="w-full flex flex-col items-center justify-center p-10"
          style={{ backgroundColor: '#fff' }}
        >
          <div className="flex flex-wrap justify-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex justify-center">
                <div 
                  className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center cursor-pointer transform transition duration-500 hover:scale-105 relative group" 
                  style={{ width: '250px', height: '300px' }}
                  onClick={() => handleClickOpen(member)}
                >
                  <Avatar 
                    src={member.img} 
                    alt={member.name} 
                    sx={{ width: 96, height: 96, mb: 4 }}
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-center">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full text-center pb-2 hidden group-hover:block">
                    <span className="bg-[rgb(232,255,174)]  text-sm px-2 py-1 rounded">View</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal
        open={open}
        handleClose={handleClose}
        title={selectedMember.name}
        description={selectedMember.description}
        img={selectedMember.img} 
      />
    </div>
  );
};

export default Team;
