import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    <div className='w-screen flex flex-col items-center my-5 p-10'>
      <div className='text-6xl'>Testimonials</div>
      <div className='flex flex-col justify-center items-center'>
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  )
}

export default Testimonials