import React from 'react'

const P1 = () => {
  return (
    <div className='w-screen flex flex-col items-center justify-center'>
      <div className='w-screen space-y-8 flex flex-col items-center bg-[#131b23] p-10 rounded-md'>
        <h1 className='text-7xl'>Staying Healthy Is <strong>A Skill</strong></h1>
        <h3 className='text-3xl'><strong>We Can teach You </strong>how to <span className='underline'>Be and <strong>Stay Healthy</strong></span></h3>
        <div className='flex justify-center space-x-10 max-w-full'>
            <div className='p-12 w-[500px] flex justify-center items-center text-4xl cursor-pointer bg-[#0a111c]'>Video</div>
            <div className='max-w-lg flex flex-col items-center justify-between text-sm p-7'>
              <h3 className='text-lg mb-6'>If you're somebody who cares for their well-being and understands it's importance then pay attention. you most likely struggle with mental disorders or problems with health. In short, your body is screaming at you . It doesn't want drugs, medicine or shots. It wants to be clean from chemicals or in other words Cleansed. And this is the only medicine you will ever need and I’m gonna teach you how to utilize it. While you’re still with me, let me introduce myself with the video on the left</h3>
              <a href="/meet"><div className='text-xl button'>Schedule Now!</div></a>
            </div>
        </div>
      </div>
      
      <hr className='relative bottom-[4.5px] w-5/6 border-dotted border-t-[8px] border-white-600 '/>
    </div>
  )
}
export default P1