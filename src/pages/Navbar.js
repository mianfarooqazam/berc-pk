import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <ul className="flex justify-center space-x-8 p-4">
        <li>
          <a href="#home" className="text-lg font-semibold text-gray-700">Home</a>
        </li>
        <li>
          <a href="#team" className="text-lg font-semibold text-gray-700">Team</a>
        </li>
        <li>
          <a href="#lets-talk" className="text-lg font-semibold text-gray-700">Let's Talk</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
