import React from 'react'

const P1 = () => {
  return (
    <div className='w-screen flex flex-col items-center justify-center'>
      <div className='w-screen space-y-8 flex flex-col items-center p-10 rounded-md'>
        <h1 className='text-7xl'>Staying Healthy Is <strong>A Skill</strong></h1>
        <h3 className='text-3xl'><strong>We Can teach You </strong>how to <span className='underline'>Be and <strong>Stay Healthy</strong></span></h3>
        <div className='flex flex-col justify-center space-x-10 items-center'>
            <div className='p-12 w-[60vw] h-[60vh] flex justify-center items-center text-4xl cursor-pointer bg-[#0a111c]'>Video</div>
            <div className='w-[60vw] flex flex-col items-center justify-between text-sm p-7'>
              <h3 className='text-2xl mb-6'>The Detox Blueprint Masterclass is for anyone who wants to achieve flow state, improve energy levels, obliterate chronic illness/disease and experience a full restoration of your health, body and mind. I spent 10+ years navigating hundreds of therapies, supplements and doctors so that you don't have to.</h3>
              <a href="/meet"><div className='text-xl button'>Schedule Now!</div></a>
            </div>
        </div>
      </div>
      
      <hr className='relative bottom-[4.5px] w-5/6 border-dotted border-t-[8px] border-white-600 '/>
    </div>
  )
}
export default P1