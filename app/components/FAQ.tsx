import React from 'react'
import FAQCards from './FAQCards'
import faqdata from '../../assests/faqdata'

const FAQ = () => {
  const faqElements=faqdata.map((faq: { ques: string; ans: string }) => {
    return <FAQCards ques={faq.ques} ans={faq.ans} />
  })
  return (
    <div className='bg-[#131b23] w-screen py-10 flex flex-col items-center justify-between'>
      <div className='text-6xl text-bold'>FAQs</div>
      <div className='flex justify-center items-center space-x-16 my-8 mx-8'>
        {faqElements}        
      </div>
    </div>
  )
}

export default FAQ