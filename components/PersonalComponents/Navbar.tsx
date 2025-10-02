"use client"
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-l w-full from-white to-red-400 fixed top-0 z-10">
      <div className="flex justify-between items-center p-3">
        <div className="font-bold text-2xl tracking-widest">
          GREENBITES
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex font-thin flex-row justify-center items-center list-none gap-3">
          <li className="flex justify-center items-center">Home</li>
          <li className="flex justify-center items-center">Aboutus</li>
          <li className="flex justify-center items-center">Contact</li>
          <Button className="font-thin">Get Started</Button>
        </div>

        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen?<IoCloseOutline width={30}/>:<GiHamburgerMenu/>}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center pb-3 z-10">
          <li className="py-2 list-none">Home</li>
          <li className="py-2 list-none">Aboutus</li>
          <li className="py-2 list-none">Contact</li>
          <Button className="font-thin mt-2">Get Started</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
