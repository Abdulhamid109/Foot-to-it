import React from 'react'
import { Button } from '../ui/button'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards'
import testimonials from '@/constants/testimonial'
import Link from 'next/link'

const HeroSection = () => {
  return (
    
      <>
      <div className='flex flex-col justify-center items-center text-center font-thin text-2xl p-5 mt-10'>
        <div className='p-2'>
          Welcome to
          <span className='z-9 ml-1 font-semibold bg-gradient-to-l from-green-300 p-1 text-white rounded-md backdrop-blur-lg shadow-xs border-0 shadow-black to-green-900'>
            Green Bites.
          </span>
        </div>
        Where Food tastes like home
      </div>

      <div className='flex flex-col justify-center items-center p-15 text-4xl text-center font-thin'>
        Your Afternoon Advantage. <span className='text-2xl'>Smart Lunch, Smart work</span>
      </div>

      <div className='flex justify-center items-center gap-2'>
        <Button><Link href={'/user/pages/about'}>Know About us</Link></Button>
        <Button><Link href={'/user/auth/login'}>Get Started</Link></Button>
      </div>

      <div className='p-10'>
        <div className='font-thin tracking-tighter p-2 md:text-xl'>
          About Us
        </div>
        <div className='p-1 flex justify-center items-center'>
          <img src="Media.jpg" alt="image uploaded" />
        </div>
        <div className='font-thin text-xs tracking-tighter flex justify-center items-center p-2 md:text-xl'>Food that gives you warmth...</div>
      </div>

      <div className='p-10'>
        <div className='font-thin tracking-tighter p-2 md:text-xl'>
          Hear from our happy customers
          <div className=" rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              className='z-7'
              items={testimonials}
              direction="right"
              speed="slow"

            />
          </div>
        </div>
      </div>
      </>

  )
}

export default HeroSection