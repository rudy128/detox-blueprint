import React from 'react'

const Navbar = () => {
  return (
    <div className='backdrop-blur-md top-0  left-0 z-50 sticky min-w-full bg-slate-800 h-[7dvh] px-20 shadow-md rounded-b-2xl flex items-center'>
      <div className='flex justify-between w-full items-center'>
        <div>
          <div className='text-[#fffb] text-2xl hover:text-white flex justify-center items-center rounded-2xl h-12 w-20'><a href="/"><strong>Home</strong></a></div>
        </div>
        <div>
          <div className='w-[8em] h-[2.8em] flex justify-center hover:text-black hover:bg-white items-center border-2 rounded-md'><a href="/meet"><strong>Join Now!</strong></a></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar