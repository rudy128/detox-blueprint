"use client"
import React, {useState } from 'react'

interface data{
    ques:string,
    ans:string
}

function FAQCards(props:data) {
    const [showAnswer, setShowAnswer]=useState(false);
    let toggleShow = ()=>setShowAnswer(!showAnswer);

  return (
    <div className='border-2 rounded-3xl p-6 flex flex-col justify-between items-center'>
        <div className='flex justify-between items-center'>
            <div className='text-sm mr-6'>{props.ques}</div>
            <div className='text-6xl pb-5 cursor-pointer' onClick={toggleShow}>+</div>
        </div>
        {showAnswer && <div className='text-[16px]'>{props.ans}</div>}
    </div>
  )
}

export default FAQCards