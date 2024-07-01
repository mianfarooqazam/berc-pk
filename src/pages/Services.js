import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faComments, faFlask, faRecycle } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <section id="services" className="h-screen flex flex-col items-center justify-center p-8" style={{ backgroundColor: 'yellow' }}>
      <h1 className="text-4xl font-bold mb-12">BERC Offers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        <div className="bg-white shadow-md p-6 text-center rounded-lg transform transition-transform hover:scale-105 hover:animate-gasp">
          <FontAwesomeIcon icon={faCertificate} className="text-blue-500 mb-4" style={{ fontSize: '100px' }} />
          <h2 className="text-2xl font-bold text-gray-800">Certificate</h2>
          <p className="text-gray-600">Certification of the New and Old Buildings.</p>
        </div>
        <div className="bg-white shadow-md p-6 text-center rounded-lg transform transition-transform hover:scale-105 hover:animate-gasp">
          <FontAwesomeIcon icon={faComments} className="text-blue-500 mb-4" style={{ fontSize: '100px' }} />
          <h2 className="text-2xl font-bold text-gray-800">Consultation</h2>
          <p className="text-gray-600">Consultation About the New and Old Buildings.</p>
        </div>
        <div className="bg-white shadow-md p-6 text-center rounded-lg transform transition-transform hover:scale-105 hover:animate-gasp">
          <FontAwesomeIcon icon={faFlask} className="text-blue-500 mb-4" style={{ fontSize: '100px' }} />
          <h2 className="text-2xl font-bold text-gray-800">Research and Development</h2>
          <p className="text-gray-600">Research and Development of New and Old Buildings</p>
        </div>
        <div className="bg-white shadow-md p-6 text-center rounded-lg transform transition-transform hover:scale-105 hover:animate-gasp">
          <FontAwesomeIcon icon={faRecycle} className="text-blue-500 mb-4" style={{ fontSize: '100px' }} />
          <h2 className="text-2xl font-bold text-gray-800">Transformation</h2>
          <p className="text-gray-600">Transformation of New and Old Buildings</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
