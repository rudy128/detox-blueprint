import React from 'react'

const Benefits = () => {
  return (
    <div className='w-screen flex flex-col items-center justify-center'>
      <hr className='relative top-[16px] w-5/6 border-dotted border-t-[8px] border-white-600 '/>
      <div className='my-3 py-12 bg-[#131b23] w-screen flex flex-col items-center'>
        <h1 className='text-7xl mb-12'>Benefits You will recieve after joining</h1>
        <div className='flex justify-center'>
          <div className='flex flex-col justify between items-center p-8 space-y-8'>
            <div className='w-80 text-xl font-semibold flex justify-center group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30'>More energy and work ethic</div>
            <div className='w-80 text-xl font-semibold flex justify-center group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30'>Increased Libido</div>
            <div className='flex text-xl font-semibold w-80 justify-center group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30'>Mental clarity</div>
            <div className='flex text-xl font-semibold w-80 justify-center group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30'>Better well-being</div>
          </div>
          <div className='flex flex-col justify cneter items-center p-8 space-y-8'>
            <div className='flex text-xl font-semibold w-80 justify-center group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30'>Fat loss</div>
            <div className='flex text-xl font-semibold w-80 justify-center group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30'>Increase in Athletic Abilities</div>
            <div className='flex text-xl font-semibold w-80 justify-center group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30'>Increase in Sexual Drive</div>
            <div className='flex text-xl font-semibold w-80 justify-center group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30'>Getting Noticed by Girls</div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Benefits
