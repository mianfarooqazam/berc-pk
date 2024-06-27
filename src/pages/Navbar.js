import React from 'react';
import logo from '../assets/berc-logo.jpeg'; 

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full shadow-md z-10" style={{ backgroundColor: '#fafafa' }}>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-14" />
        </div>
        <ul className="flex space-x-8">
          <li>
            <a href="#home" className="text-lg font-medium text-gray-700">Home</a>
          </li>
          <li>
            <a href="#why-us" className="text-lg font-medium text-gray-700">Why Us</a>
          </li>
          <li>
            <a href="#services" className="text-lg font-medium text-gray-700">Services</a>
          </li>
          <li>
            <a href="#tools" className="text-lg font-medium text-gray-700">Tools</a>
          </li>
          <li>
            <a href="#team" className="text-lg font-medium text-gray-700">Team</a>
          </li>
          
          <li>
            <a href="#lets-talk" className="text-lg font-medium text-gray-700">Let's Talk</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
