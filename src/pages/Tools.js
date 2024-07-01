import React, { useState } from 'react';
import { Button, Box, Modal, Fade, Backdrop, Typography } from '@mui/material';
import bg from '../assets/tool2.jpg'; 

const tools = [
  { name: 'LPD (Lighting Power Density) Tool', description: 'Description for LPD Tool' },
  { name: 'BPD (Building Performance Design) Tool', description: 'Description for BPD Tool' },
  { name: 'RLF (Residential Lighting Fixture) Tool', description: 'Description for RLF Tool' },
  { name: 'Compliance Tool', description: 'Description for Compliance Tool' },
];

const Tools = () => {
  const [open, setOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);

  const handleOpen = (tool) => {
    setSelectedTool(tool);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTool(null);
  };

  return (
    <div>
      <section id="tools" className="h-screen flex mb-0" style={{ backgroundColor: '#ffff' }}>
        <div className="w-1/2 h-full">
          <img src={bg} alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="w-1/2 h-full flex flex-col items-center justify-start p-10">
          <h1 
            className="text-center font-medium mb-8" 
            style={{ fontSize: '50px' }}
          >
            Our Tools!
          </h1>
          <p 
            className="text-center font-thin" 
            style={{ fontSize: '20px', marginTop: '20px' }} >
              BERC introduces a set of tools, developed with dedication that helps empowering civil engineers and construction professionals with cutting-edge tools designed to enhance efficiency, precision, and compliance in their projects. Our suite of innovative tools is developed with the latest technology to meet the diverse needs of the industry.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {tools.map((tool) => (
               <Button 
               key={tool.name} 
               variant="contained" 
               onClick={() => handleOpen(tool)}
               style={{
                 background: 'linear-gradient(45deg, #35a2eb 30%, #35a2eb 90%)',
                 border: 0,
                 borderRadius: 3,
                 boxShadow: '0 3px 5px 2px rgba(53, 162, 235,.3)',
                 color: 'white',
                 height: 48,
                 padding: '0 30px',
                 margin: '10px',
               }}
             >
               {tool.name}
             </Button>
            ))}
          </div>
        </div>
      </section>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box 
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {selectedTool?.name}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {selectedTool?.description}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    
      <section id="lets-talk-2" className="relative h-screen flex items-center justify-center" style={{ backgroundColor: '#fff', marginTop: '-20px' }}>
        {/* Additional content can go here */}
      </section>
    </div>
  );
};

export default Tools;
