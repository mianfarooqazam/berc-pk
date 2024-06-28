import React, { useState } from 'react';
import bg from '../assets/team.jpg'; 
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Modal from '../components/modal/modal';

const Team = () => {
  const teamMembers = [
    { name: 'Dr. Naveed Ahmad', role: 'Director Building Energy Research Center UET Peshawar', description: 'Naveed Ahmad (PhD, CEM) is a Certified Buildings Energy Efficiency Practitioner with over twelve years of work experience in USA, France, and Pakistan. He is currently working as a Director Building Energy Research Centre (BERC) at UET Peshawar. Dr Naveed is a Fulbright Alumni with Masters (USA), PhD (France), and Post-doctorate (France) in Energy Management, Measurement of Energy Efficiency, and Smart Buildings. He is working as an Energy Modeling consultant with SC Associates, an energy conservation/auditing firm based in NYC, USA. He has recently completed a project on Smart Buildings in France. The project was a collaboration between a French University INSA Lyon and smart building solution provider SPIE to develop the frameworks for Machine Learning/data-based energy efficiency improvements in the energy sector. He is currently leading the project Transformation of the Construction Sector in Pakistan: A Pathway towards Clean, Green, and Sustainable Buildings. The project is funded by Federal Ministry for Economic Cooperation and Development (BMZ) and supported by Deutsche Gesellschaft fur Internationale Zusammenarbeit (GIZ) with the National Energy Efficiency and Conservation Authority (NEECA) as implementing partner.' },
    { name: 'Dr. Fakhr e Alam', role: 'Team Lead Building Energy Research Center', description: "Dr. Fakhre Alam Khan is a dedicated professional in the field of building energy research, currently serving as a working group lead in the project, “Transformation of Buildings in Pakistan: A Pathway Towards Green, Sustainable and Zero Energy Buildings”. He holds a Master's and Ph.D. in Nano Materials from Sungkyunkwan University, South Korea, and is a registered Professional Engineer (PE) specializing in Thermal-Fluid Engineering with Pakistan engineering council. Dr. Fakhre Alam Khan is also affiliated with the Mechanical Engineering Department at University of Engineering and Technology Peshawar; where his expertise and passion drive impactful research and innovation in sustainable building practices. With a profound understanding of building energy systems, Dr. Fakhre Alam Khan is an expert in building energy modelling tools such as DesignBuilder, Autodesk Revit (BIM), and RETScreen Expert, ensuring comprehensive and efficient solutions for energy-efficient building design and operation. He has also contributed to the development of an indigenous tool for Residential building energy modelling for Pakistani homes, based on ASHRAE latest recommended energy modelling design method, Residential load factor (RLF) showcasing his commitment to advancing sustainable building practices." },
    { name: 'Engr. Fazl e Yazdan', role: 'Team Lead Building Energy Research Center', description: 'Engr. Fazl e Yazdan is the Team Lead at the Building Energy Research Center.' },
    { name: 'Syed Waqas Ali Shah', role: 'Administrative Officer', description: 'Syed Waqas Ali Shah is the Administrative Officer.' },
    { name: 'Abid Ullah', role: 'Project Coordinator', description: 'Abid Ullah is the Project Coordinator.' },
    { name: 'Maidah Arshad', role: 'Communication and Promotional Expert', description: 'Maidah Arshad is the Communication and Promotional Expert.' },
    { name: 'Essa Khan', role: 'Communication Expert Assistant', description: 'Essa Khan is the Communication Expert Assistant.' },
    { name: 'Mishal Haq', role: 'Graduate Engineer', description: 'Mishal Haq is a Graduate Engineer.' },
    { name: 'Fahad Rashid', role: 'Senior Research Assistant', description: 'Fahad Rashid is a Senior Research Assistant.' },
    { name: 'Kashif Khan', role: 'Research Assistant', description: 'Kashif Khan is a Research Assistant.' },
    { name: 'Muhammad Osama Aziz', role: 'Research Associate', description: 'Muhammad Osama Aziz is a Research Associate.' },
    { name: 'Rafi Ullah', role: 'Research Assistant', description: 'Rafi Ullah is a Research Assistant.' },
    { name: 'Engr: Muhammad Ilyas', role: 'Web Developer', description: 'Engr: Muhammad Ilyas is a Web Developer.' },
    { name: 'Sajid Khan', role: 'Software Developer', description: 'Sajid Khan is a Software Developer.' },
    { name: 'Farooq Azam', role: 'UI/UX', description: 'Farooq Azam is a UI/UX specialist.' },
    { name: 'Hamad Aftab', role: 'Graduate Engineer', description: 'Hamad Aftab is a Graduate Engineer.' },
    { name: 'Muhammad Abbas', role: 'Graduate Engineer', description: 'Muhammad Abbas is a Graduate Engineer.' },
    { name: 'Usman Ur Rehman', role: 'Graduate Engineer', description: 'Usman Ur Rehman is a Graduate Engineer.' },
    { name: 'Zainab Akbar', role: 'Research Assistant', description: 'Zainab Akbar is a Research Assistant.' },
    { name: 'Iqra Hussain', role: 'Graduate Engineer', description: 'Iqra Hussain is a Graduate Engineer.' },
  ];

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
                <div 
                  className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center cursor-pointer transform transition duration-500 hover:scale-105" 
                  style={{ width: '250px', height: '300px' }}
                  onClick={() => handleClickOpen(member)}
                >
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

      <Modal
        open={open}
        handleClose={handleClose}
        title={selectedMember.name}
        description={selectedMember.description}
      />
    </div>
  );
};

export default Team;
