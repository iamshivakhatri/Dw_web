// Navbar.jsx

import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../CSS/nas.svg';


const Navbar = () => {
  return (
    <nav className="bg-sky-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to= "/">
        <img src={logo} alt="Logo" style={{ maxWidth: '60px', height: '60%' }} />
        </Link>
      
        <div className="text-white text-xl font-bold">North American Stainless</div>

        <div className="hidden md:flex space-x-4">
          <Link to = "/" className='text-white'>Home</Link>
          <Link to ="/claims"className="text-white">Claims  </Link>
          <Link to ="/cameras"className="text-white">Cameras  </Link>
          <Link to ="/images"className="text-white">Images </Link>
          <Link to ="/aboutus"className="text-white">About US  </Link>
         
         
        </div>

        {/* Responsive menu button */}
        <div className="md:hidden">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
