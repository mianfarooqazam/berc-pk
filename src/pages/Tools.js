import React, { useState } from 'react';
import { Button, Box, Modal, Fade, Backdrop, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bg from '../assets/tool2.jpg'; 
import bpdImg1 from '../assets/toolsImages/bpd-img1.jpg';
import bpdImg2 from '../assets/toolsImages/bpd-img2.jpg';
import bpdImg3 from '../assets/toolsImages/bpd-img3.jpg';
import bpdImg4 from '../assets/toolsImages/bpd-img4.jpg';
import lcaImg1 from '../assets/toolsImages/lca-img1.jpg';
import lcaImg2 from '../assets/toolsImages/lca-img2.jpg';
import lcaImg3 from '../assets/toolsImages/lca-img3.jpg';
import lcaImg4 from '../assets/toolsImages/lca-img4.jpg';
import lcaImg5 from '../assets/toolsImages/lca-img5.jpg';
import lcaImg6 from '../assets/toolsImages/lca-img6.jpg';
import lcaImg7 from '../assets/toolsImages/lca-img7.jpg';

const tools = [
  { name: 'LCA (Life Cycle Assessment) Tool', description: 'BERC introduces a set of tools, developed with dedication that helps empowering civil engineers and construction professionals with cutting-edge tools designed to enhance efficiency, precision, and compliance in their projects. Our suite of innovative tools is developed with the latest technology to meet the diverse needs of the industry.' },
  { name: 'BPD (Building Performance Design) Tool', description: 'BERC introduces a set of tools, developed with dedication that helps empowering civil engineers and construction professionals with cutting-edge tools designed to enhance efficiency, precision, and compliance in their projects. Our suite of innovative tools is developed with the latest technology to meet the diverse needs of the industry.' },
  { name: 'RLF (Residential Lighting Fixture) Tool', description: 'BERC introduces a set of tools, developed with dedication that helps empowering civil engineers and construction professionals with cutting-edge tools designed to enhance efficiency, precision, and compliance in their projects. Our suite of innovative tools is developed with the latest technology to meet the diverse needs of the industry.' },
  { name: 'Compliance Tool', description: 'BERC introduces a set of tools, developed with dedication that helps empowering civil engineers and construction professionals with cutting-edge tools designed to enhance efficiency, precision, and compliance in their projects. Our suite of innovative tools is developed with the latest technology to meet the diverse needs of the industry.' },
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
              width: '80%',
              height: '80%',
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
              overflow: 'auto',
            }}
          >
            <Typography 
              id="transition-modal-title" 
              variant="h5" 
              component="h2" 
              sx={{ textAlign: 'center', mb: 2, textDecoration: 'underline' }}
            >
              {selectedTool?.name}
            </Typography>
            {selectedTool?.name === 'BPD (Building Performance Design) Tool' ? (
              <>
                <Carousel showThumbs={false}>
                  <div>
                    <img src={bpdImg1} alt="BPD Image 1" style={{ maxHeight: '500px', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <img src={bpdImg2} alt="BPD Image 2" style={{ maxHeight: '500px', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <img src={bpdImg3} alt="BPD Image 3" style={{ maxHeight: '500px', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <img src={bpdImg4} alt="BPD Image 4" style={{ maxHeight: '500px', objectFit: 'contain' }} />
                  </div>
                </Carousel>
                <Typography id="transition-modal-description" sx={{ mt: 2, textAlign: 'center' }}>
                  {selectedTool?.description}
                </Typography>
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  <Button variant="contained" color="primary" onClick={handleClose}>
                    Close
                  </Button>
                </Box>
              </>
            ) : selectedTool?.name === 'LCA (Life Cycle Assessment) Tool' ? (
              <>
                <Carousel showThumbs={false}>
                  <div>
                    <img src={lcaImg1} alt="LCA Image 1" style={{ maxHeight: '500px', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <img src={lcaImg2} alt="LCA Image 2" style={{ maxHeight: '500px', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <img src={lcaImg3} alt="LCA Image 3" style={{ maxHeight: '500px', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <img src={lcaImg4} alt="LCA Image 4" style={{ maxHeight: '500px', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <img src={lcaImg5} alt="LCA Image 5" style={{ maxHeight: '500px', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <img src={lcaImg6} alt="LCA Image 6" style={{ maxHeight: '500px', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <img src={lcaImg7} alt="LCA Image 7" style={{ maxHeight: '500px', objectFit: 'contain' }} />
                  </div>
                </Carousel>
                <Typography id="transition-modal-description" sx={{ mt: 2, textAlign: 'center' }}>
                  {selectedTool?.description}
                </Typography>
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  <Button variant="contained" color="primary" onClick={handleClose}>
                    Close
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <Typography id="transition-modal-description" sx={{ mt: 2, textAlign: 'center' }}>
                  {selectedTool?.description}
                </Typography>
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  <Button variant="contained" color="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Tools;
