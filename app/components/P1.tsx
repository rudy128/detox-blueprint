import React from 'react';
import P1Video from './P1Video';

const P1 = () => {
  return (
    <div className='w-full h-[93dvh] flex flex-col items-center justify-center'>
      <div className='min-h-full min-w-full relative'>
        <P1Video />
        <div className='w-full h-full absolute backdrop-blur-xl left-0 top-0 z-1 flex justify-evenly items-center'>
          <div className='space-y-8 flex flex-col items-center p-5 rounded-md'>
            <h1 className='text-7xl pb-3 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-red-400 to-orange-400'>Your Longevity is <strong>Your Liver</strong></h1>
            <h3 className='text-3xl'><strong>Biohack</strong> it To Wind Your Clock <strong>Back 10 Years</strong></h3>
            <div className='flex flex-col justify-center space-x-10 items-center'>
              <div className='w-[60vw] flex flex-col items-center justify-between text-sm p-7'>
                <h3 className='text-2xl mb-6'>The Detox Blueprint Masterclass is for anyone who wants to achieve flow state, improve energy levels, obliterate chronic illness/disease and experience a full restoration of your health, body and mind. I spent 10+ years navigating hundreds of therapies, supplements and doctors so that you don't have to.</h3>
                <a href="/meet"><div className='text-xl button'>Schedule Now!</div></a>
              </div>
            </div>
          </div>
          <div className='bg-purple-500 rotate-45 flex justify-center items-center rounded-full h-[21.5dvw] w-[20.5dvw]'>
            <div className='bg-[#1953aa] rounded-full h-[20.5dvw] flex justify-center items-center w-[20dvw]'>
              <div className='bg-sky-300 rounded-full h-[19.5dvw] flex justify-center items-center w-[20dvw]'>
                <div className='rounded-full img-container -rotate-45 h-[19.5dvw] w-[18.5dvw]' ></div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <hr className='relative bottom-[4.5px] w-5/6 border-dotted border-t-[8px] border-white-600 ' />
    </div>
  )
}
export default P1