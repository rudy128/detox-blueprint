import React from 'react'

const Navbar = () => {
  return (
    <div className='min-w-full flex justify-between items-center h-20 px-20'>
        <div>
          <div className='text-white text-2xl'><a href="/"><strong>Home</strong></a></div>
        </div>
        <div>
          <div className='w-[159px] h-[49px] flex justify-center items-center border-2 rounded-md'><a href="/meet"><strong>Join Now!</strong></a></div>
        </div>
    </div>
  )
}

export default Navbar