"use client"
import React from 'react'
import { InlineWidget } from 'react-calendly'

export default function page() {
  return (
    <div className='pb-10 w-screen'>
        <InlineWidget url={'https://calendly.com/youridealday/virtcoffee'} pageSettings={{backgroundColor:'0a111c',textColor:'ffffff',primaryColor:'a400ff'}}/>
    </div>
  )
}
