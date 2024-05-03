import React from 'react'

function TestimonialCard() {
  return (
    <div className='my-9 space-x-4 py-8 px-4 w-[45vw] h-72 border-2 flex items-center justify-between rounded-3xl'>
        <div className='w-1/4 h-full space-y-4 flex flex-col justify-center items-center'><div className='rounded-full w-5/6 h-3/4 border-2'></div>
        <div>Thomas Shelby</div></div>
        <div className='px-4 text-sm'>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et error eius aliquid repudiandae laboriosam perferendis"</div>
    </div>
  )
}

export default TestimonialCard