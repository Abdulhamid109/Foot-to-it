import Footer from '@/components/PersonalComponents/Footer'
import HeroSection from '@/components/PersonalComponents/HeroSection'
import Navbar from '@/components/PersonalComponents/Navbar'
import React from 'react'

const page = () => {

  return (
    <div className='w-screen h-screen'>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  )
}

export default page