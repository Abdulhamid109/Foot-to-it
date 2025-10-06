import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-screen font-thin tracking-tighter p-20'>
      <div className='flex justify-center items-center text-2xl mb-5'>
        Green Bites - Add the new Company
      </div>
      <div className='p-5 backdrop-blur-2xl shadow-2xl bg-black/10 rounded-md'>
        <form className='flex flex-col justify-center items-start'>
            <label className='mb-1'>Company Name</label>
          <input
          className='mb-1 focus:outline p-2 w-full rounded-md backdrop-blur-2xl shadow-2xl bg-black/10  '
          type="text" placeholder='Please enter the company Name' />

          <label className='mb-1'>Company Address</label>
          <input
          className='mb-1 focus:outline p-2 w-full rounded-md backdrop-blur-2xl shadow-2xl bg-black/10  '
          type="text" placeholder='Please enter the Company address Or ParkName' />

          <label className='mb-1'>Company Description</label>
          <input
          className='mb-1 focus:outline p-2 w-full rounded-md backdrop-blur-2xl shadow-2xl bg-black/10  '
          type="text" placeholder='Please enter the about the company' />
      
          <label className='mb-1'>Upload <span className='text-xs'>(.png .jpg .jpeg .webp)</span></label>
          <input
          className='mb-1 focus:outline p-2 w-full rounded-md backdrop-blur-2xl shadow-2xl bg-black/10  '
          type="file" accept="image/png, image/jpeg, image/jpg, image/webp" placeholder='Please enter the company Name' />

          <Button className='bg-black/10 mt-2 w-full hover:bg-black/20'>Submit Company</Button>
          </form>
      </div>
    </div>
  )
}

export default page