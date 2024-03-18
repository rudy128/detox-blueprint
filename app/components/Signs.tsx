import React from 'react'

const P2 = () => {
  return (
    <div className='space-y-6 w-screen flex flex-col items-center p-10'>
        <h1 className='text-6xl mb-12'>Are you <strong className='underline'>Experiencing</strong> these symptoms?</h1>
        <div className='bold flex justify-center space-x-16'>
          <ul className='space-y-8' >
            <li><div className=' w-[550px] flex flex-col items-center justify-between group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30'><h1 className='mb-2 text-4xl'>Low/deteriorating Libido</h1><p className='text-[18px] dark:text-gray-500 text-wrap'>Decreased interest in sexual activity or intimacy, along with difficulty becoming aroused or achieving orgasm. Loss of pleasure or satisfaction in sexual experiences?</p></div></li>
            <li><div className=' w-[550px] flex flex-col items-center justify-between group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30'><h1 className='mb-2 text-4xl'>Depression and Anxiety</h1><p className='text-[18px] dark:text-gray-500 text-wrap'>Persistent feelings of sadness and hopelessness, accompanied by intense worry or panic attacks. Changes in appetite, sleep disturbances, and difficulty concentrating?</p></div></li>
            <li><div className=' w-[550px] h-48 flex flex-col items-center justify-between group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30'><h1 className='mb-2 text-4xl'>Hormone Imbalance</h1><p className='text-[18px] dark:text-gray-500 text-wrap'>Irregular menstrual cycles in women, often characterized by heavy or painful periods. Mood swings, unexplained weight changes, and fluctuations in libido?</p></div></li>
          </ul>
          <ul className='space-y-8'>
            <li><div className=' w-[550px] flex flex-col items-center justify-between group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30'><h1 className='mb-2 text-4xl'>Skin Inflammation</h1><p className='text-[18px] dark:text-gray-500 text-wrap'>Visible redness, swelling, or itching of the skin, particularly on the face, chest, or back. Acne breakouts, rashes, or dry, flaky skin?</p></div></li>
            <li><div className=' w-[550px] flex flex-col items-center justify-between group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30'><h1 className='mb-2 text-4xl'>Low Energy and No drive</h1><p className='text-[18px] dark:text-gray-500 text-wrap'>Consistent fatigue, even after adequate rest, accompanied by a lack of motivation or interest in activities. Difficulty initiating or completing tasks despite previous enjoyment</p></div></li>
            <li><div className=' w-[550px] flex flex-col items-center justify-between group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30'><h1 className='mb-2 text-3xl'>Other methods don't seem to do the trick</h1><p className='text-[18px] dark:text-gray-500 text-wrap'>Other cleanses, supplements, diets, programs prove ever difficult to follow due to the extreme specificity of the steps and lack there of results?</p></div></li>
          </ul>
        </div>
        <a href="/meet"><div className='button text-xl'><strong>Yes? Claim My Offer!</strong></div></a>
    </div>
  )
}

export default P2