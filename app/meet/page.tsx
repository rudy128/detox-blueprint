import React from 'react'
import Calendly from './Calendly'
import Navbar from '../components/Navbar'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function page() {
  return (
    <div className='bg-[#0a111c] text-white h-screen'>
        <Navbar />
        <Calendly />
        <FAQ />
        <Footer />
    </div>
  )
}
