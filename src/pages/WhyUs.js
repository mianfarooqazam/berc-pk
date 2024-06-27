import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

const WhyUs = () => {
  return (
    <section id="why-us" className="min-h-screen flex flex-col items-center justify-center bg-yellow-100 p-8">
      <div className="flex max-w-6xl w-full">
        <div className="flex flex-col items-center justify-center w-1/3">
          <FontAwesomeIcon icon={faQuestion} className="text-gray-700 mb-4" style={{ fontSize: '200px' }} />
          <h1 className="font-thin" style={{ fontSize: '80px' }}>Why Choose</h1>
          <h1 className="font-thin" style={{ fontSize: '80px', color: "#32CD32" }}>Berc</h1>
        </div>
        <div className="w-2/3 text-left pl-8">
          <p className="text-lg text-gray-800">
            The establishment of the BERC marks a significant milestone in our commitment to advancing research and development in the field of energy, particularly in the area of sustainable building energy solutions. The Centre is Pakistan's first ever state-of-the-art centre working in the field of sustainable buildings design and construction. The centre serves as a hub for interdisciplinary collaboration, bringing together researchers, industry experts, and policymakers to address the energy challenges facing our society.
            The research center has pioneered in promising to provide solutions for Energy Efficiency in Buildings while focusing on five major SDGs including SDG 7: Affordable and Clean Energy, SDG 9: Industry, Innovation and Infrastructure, SDG 11: Sustainable Cities and Communities, SDG 12: Responsible Consumption and Production, and SDG 13: Climate Action. This center has a 28-member team comprising of Mechanical, Electrical, Civil, and Architectural engineers.
          </p>
          <div className="flex flex-wrap justify-center mt-12 space-x-8 w-full max-w-6xl">
        <div className="bg-white shadow-md p-6 text-center rounded-lg w-1/4">
          <h2 className="text-2xl font-bold text-gray-800">3.5 Years</h2>
          <p className="text-gray-600">Experience</p>
        </div>
        <div className="bg-white shadow-md p-6 text-center rounded-lg w-1/4">
          <h2 className="text-2xl font-bold text-gray-800">200</h2>
          <p className="text-gray-600">Trusted Customers</p>
        </div>
        <div className="bg-white shadow-md p-6 text-center rounded-lg w-1/4">
          <h2 className="text-2xl font-bold text-gray-800">500+</h2>
          <p className="text-gray-600">Positive Reviews</p>
        </div>
        <div className="bg-white shadow-md p-6 text-center rounded-lg w-1/4">
          <h2 className="text-2xl font-bold text-gray-800">23</h2>
          <p className="text-gray-600">Projects Completed</p>
        </div>
      </div>
        </div>
      </div>
      
    </section>
  );
};

export default WhyUs;
