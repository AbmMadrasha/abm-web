import React from 'react'
import principle from '../../assets/Principle.jpeg'
import abduRakib from '../../assets/AbduRakib.png'
import shahadat from '../../assets/OstadShahadat.png'


const Principle = () => {
  return (
    <div className='px-6 gap-5 md:gap-25 flex-col md:px-10 md:py-10 md:flex md:flex-row justify-center items-center'>

      {/* Sheikh Abdur Rakib Madani */}
      <div className='max-w-md w-full bg-white shadow-lg rounded-xl overflow-hidden'>

        {/* Image */}
        <div className='border-b border-[#1B4962]'>
          <img 
            src={abduRakib} 
            alt="principle" 
            className='w-full h-100 object-contain'
          />
        </div>

        {/* Text Content */}
        <div className='bg-[#1B4962] text-white text-center p-6 space-y-1'>
          <h2 className='text-2xl md:text-3xl font-bold'>
            Sheikh Abdur Rakib <br /> 
            <span className='text-[20px]'>(Al Madani)</span>
          </h2>
          <p className='text-lg'>Founder</p>
          <p>Abu bakar (Ra.) Madrasah, Chattogram</p>
        </div>

      </div>


      {/* Sheikh Abdul Majed */}
      <div className='max-w-md w-full bg-white shadow-lg rounded-xl overflow-hidden'>

        {/* Image */}
        <div className='border-b border-[#1B4962]'>
          <img 
            src={principle} 
            alt="principle" 
            className='w-full h-100 object-contain'
          />
        </div>

        {/* Text Content */}
        <div className='bg-[#1B4962] text-white text-center p-6 space-y-1'>
          
          <h2 className='text-2xl md:text-3xl font-bold'>
            Sheikh Abdul Majeed 
            <br />
            <span className='text-[20px]'>(Al Makki, Al Madani) </span>
          </h2>
          <p className='text-lg'>Principal</p>
          <p>Abu bakar (Ra.) Madrasah,Chattogram</p>

        </div>

      </div>


      {/* Shahadat Ostad */}
      <div className='max-w-md w-full bg-white shadow-lg rounded-xl overflow-hidden'>

        {/* Image */}
        <div className='border-b border-[#1B4962]'>
          <img 
            src={shahadat} 
            alt="principle" 
            className='w-full h-100 object-contain'
          />
        </div>

        {/* Text Content */}
        <div className='bg-[#1B4962] text-white text-center p-6 space-y-1'>
          
          <h2 className='text-2xl md:text-3xl font-bold'>
            Md. Shahadat Hossain
            <br />
            <span className='text-[20px]'> Accountant </span>
          </h2>
          <p className='text-lg'>& Co-ordinator</p>
          <p>Abu bakar (Ra.) Madrasah,Chattogram</p>

        </div>

      </div>

    </div>
  )
}

export default Principle