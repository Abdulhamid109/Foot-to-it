import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='bg-gradient-to-l from-green-900 to-green-400 text-white tracking-tighter'>
        <section className='font-thin p-10  flex justify-between'>
          <section>
            <div className='text-xl font-semibold'>Green Bites</div>
            <div className=''>
              SomeWhere on Earth
            </div>
            <div className=''>
              +91 986057****
            </div>
          </section>
          <section>
            <div className='text-xl'>Main Navigation</div>
            <div>
              <li className='list-none'>Home</li>
              <li className='list-none'>About us</li>
              <li className='list-none'>Services</li>
              <li className='list-none'>Contact us</li>
            </div>
          </section>

        </section>
        <section className='flex flex-col justify-center items-center'>
          <div className='text-xl font-extralight'>Join Us on </div>
          <div className='flex gap-2 p-2 justify-center items-center'>
            <li className='list-none text-2xl'><FaFacebook/></li>
            <li className='list-none text-2xl'><FaInstagram/></li>
            <li className='list-none text-2xl'><FaLinkedin/></li>
            <li className='list-none text-2xl'><FaXTwitter/></li>
            <li className='list-none text-2xl'><FaYoutube/></li>

          </div>
        </section>
      </footer>

  )
}

export default Footer