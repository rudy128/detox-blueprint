import React from 'react'

const Navbar = () => {
  return (
    <div className='z-50 top-0 left-0 backdrop-blur-md sticky min-w-full bg-slate-800 flex justify-between items-center h-20 px-20 shadow-md shadow-white/60 rounded-b-2xl'>
        <div>
          <div className='text-[#fffb] text-2xl hover:text-white flex justify-center items-center rounded-2xl h-12 w-20'><a href="/"><strong>Home</strong></a></div>
        </div>
        <div>
          <div className='w-[159px] h-[49px] flex justify-center hover:text-black hover:bg-white items-center border-2 rounded-md'><a href="/meet"><strong>Join Now!</strong></a></div>
        </div>
    </div>
  )
}

export default Navbar