import React from 'react'

const About = () => {
  return (
    <div className='bg-[#1B4962] h-130 md:h-100'>
        <div className='px-10 p-10 gap-10 flex flex-col md:flex md:flex-row'>

            <div className='flex flex-col'>
                <div className='border-b w-70 text-white border-white py-1 text-[16px] font-bold'>
                    Important Link
                    </div>

                    <div className='py-2 text-white'>Privacy Policy</div>
                    <div className='py-1 text-white'>Terms of Use</div>
                    <div className='py-1 text-white'>Contact US</div>
            </div>


            <div className='flex flex-col'>
                <div className='border-b w-70 text-white border-white py-1 text-[16px] font-bold'>
                    Social Media
                    </div>

                    <div className='flex flex-row gap-2 py-2'>
                        <div className=' text-white'>Privacy Policy</div>
                        <div className=' text-white'>Terms of Use</div>
                    </div>
            </div>

        </div>


        <div className='px-10 py-10'>
            <div className='text-white underline'>RSS</div>
            <div className='text-white'>Developed By Abu Bakar Madarsah IT 2026.04.23 v1.01</div>
            <div className='text-white'>Developed and Maintain By Abu Bakar (R) Madrasah Information Technology</div>
        </div>
      
    </div>
  )
}

export default About
