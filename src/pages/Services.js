import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faComments, faFlask, faRecycle } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import bg from '../assets/construction.jpg';

const Services = () => {
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setDropdown(dropdown === index ? null : index);
  };

  return (
    <>
      <section id="services" className="h-screen flex flex-col items-center justify-center p-8 bg-yellow-100">
        <h1 className="text-4xl font-bold mb-12">BERC Offers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          <div className="bg-white shadow-md p-6 text-center rounded-lg transform transition-transform hover:scale-105">
            <FontAwesomeIcon icon={faCertificate} className="text-blue-500 mb-4" style={{ fontSize: '100px' }} />
            <h2 className="text-2xl font-bold text-gray-800">Certificate</h2>
            <p className="text-gray-600">Certification of the New and Old Buildings.</p>
          </div>
          <div className="bg-white shadow-md p-6 text-center rounded-lg transform transition-transform hover:scale-105">
            <FontAwesomeIcon icon={faComments} className="text-blue-500 mb-4" style={{ fontSize: '100px' }} />
            <h2 className="text-2xl font-bold text-gray-800">Consultation</h2>
            <p className="text-gray-600">Consultation About the New and Old Buildings.</p>
          </div>
          <div className="bg-white shadow-md p-6 text-center rounded-lg transform transition-transform hover:scale-105">
            <FontAwesomeIcon icon={faFlask} className="text-blue-500 mb-4" style={{ fontSize: '100px' }} />
            <h2 className="text-2xl font-bold text-gray-800">Research and Development</h2>
            <p className="text-gray-600">Research and Development of New and Old Buildings</p>
          </div>
          <div className="bg-white shadow-md p-6 text-center rounded-lg transform transition-transform hover:scale-105">
            <FontAwesomeIcon icon={faRecycle} className="text-blue-500 mb-4" style={{ fontSize: '100px' }} />
            <h2 className="text-2xl font-bold text-gray-800">Transformation</h2>
            <p className="text-gray-600">Transformation of New and Old Buildings</p>
          </div>
        </div>
      </section>

      <section id="home" className="relative h-screen flex">
        <div 
          className="w-3/5 h-full bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(${bg})`
          }}
        ></div>
        <div className="w-1/2 p-8 flex flex-col justify-center bg-white">
          <h2 className="text-3xl font-semibold mb-4 text-center">Certified Building Strategy</h2>
          <h2 className="text-3xl font-semibold mb-4 text-center">for New and Old Housing Societies</h2>
          <p className="text-gray-700 text-center">
            Briefly introduce the importance of having a certified building strategy for housing societies in Pakistan. 
            Highlight the significance of ensuring safety, sustainability, and adherence to regulations in the construction 
            and maintenance of buildings.
          </p>
          <div className="mt-8 space-y-4">
            <div className="relative">
              <button 
                className="w-full bg-blue-500 text-white p-4 rounded-lg focus:outline-none"
                onClick={() => toggleDropdown(1)}
                style={{backgroundColor:"#59e4a7"}}
              >
                Certified Building Strategies
              </button>
              <AnimatePresence>
                {dropdown === 1 && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: 'auto' }} 
                    exit={{ opacity: 0, height: 0 }} 
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-2"
                  >
                    <div className="bg-white shadow-lg p-4 rounded-lg">
                      <p>
                        Define what a certified building strategy entails. Explain the benefits of having a certified building 
                        strategy, including improved safety, energy efficiency, and overall quality of living.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="relative">
              <button 
                className="w-full bg-blue-500 text-white p-4 rounded-lg focus:outline-none"
                onClick={() => toggleDropdown(2)}
                style={{backgroundColor:"#59e4a7"}}
              >
                Key Components
              </button>
              <AnimatePresence>
                {dropdown === 2 && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: 'auto' }} 
                    exit={{ opacity: 0, height: 0 }} 
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-2"
                  >
                    <div className="bg-white shadow-lg p-4 rounded-lg">
                      <p>
                        Outline the essential elements that should be part of a certified building strategy:
                        <ul className="list-disc pl-5">
                          <li>Structural design and engineering standards</li>
                          <li>Building materials and construction practices</li>
                          <li>Safety and emergency protocols</li>
                          <li>Sustainable and energy-efficient features</li>
                          <li>Compliance with local building codes and regulations</li>
                        </ul>
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="relative">
              <button 
                className="w-full bg-blue-500 text-white p-4 rounded-lg focus:outline-none"
                onClick={() => toggleDropdown(3)}
                style={{backgroundColor:"#59e4a7"}}
              >
                Certificate Implementation
              </button>
              <AnimatePresence>
                {dropdown === 3 && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: 'auto' }} 
                    exit={{ opacity: 0, height: 0 }} 
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-2"
                  >
                    <div className="bg-white shadow-lg p-4 rounded-lg">
                      <p>
                        Provide a step-by-step guide for developers and builders to integrate certified building strategies into 
                        new housing projects. Emphasize the importance of collaboration with architects, engineers, and local 
                        authorities during the planning and construction phases.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
