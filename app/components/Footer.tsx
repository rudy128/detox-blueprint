import React from 'react'
import { FaApple, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='relative bottom-0 h-60 w-screen px-32 flex justify-between items-center bg-[#0a111c]'>
      <div className='flex justify-between items-center w-1/3'>
        <div className='text-2xl'><a href="/">Home</a></div>
        <div className='text-2xl'><a href="https://linktr.ee/youridealday">LinkTree</a></div>
        <div className='text-2xl w-[159px] h-[49px] flex justify-center items-center border-2 rounded-md'><a href="/meet"><strong>Join Now!</strong></a></div>
      </div>
      <div className='flex justify-between items-center w-1/3'>
        <a href="https://www.instagram.com/idealdayadam/"><FaInstagram size={50} className='hover:text-pink-600 cursor-pointer' /></a>
        <FaTwitter size={50} className='hover:text-blue-600 cursor-pointer' href=''/>
        <FaYoutube size={50} className='hover:text-red-600 cursor-pointer' href=''/>
        <a href='https://podcasts.apple.com/gb/podcast/the-ideal-day-podcast/id1457973622'><FaApple size={50} className='hover:text-gray-600 cursor-pointer'/></a>

      </div>
    </div>
  )
}

export default Footer