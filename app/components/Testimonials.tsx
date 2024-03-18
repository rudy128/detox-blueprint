import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    <div className='bg-[#131b23] w-screen flex flex-col items-center my-5 p-10'>
      <div className='text-6xl'>Testimonials</div>
      <div className='flex justify-center items-center overafolow-x-scroll space-x-10'>
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  )
}

export default Testimonials