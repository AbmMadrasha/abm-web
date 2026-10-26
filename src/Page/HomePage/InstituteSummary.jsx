import React from 'react'
import { SiGoogleclassroom } from "react-icons/si";
import { GiTeacher,GiWizardStaff } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { FcDepartment } from "react-icons/fc";





const InstituteSummary = () => {

    const institDetails = [
        {
        'title':'Total Departments',
        'subtitle':5,
        'icon': <FcDepartment />
        },,

        {
        'title':'Total Classes',
        'subtitle':10,
        'icon': <SiGoogleclassroom />
        },


        {
        'title':'Total Students',
        'subtitle':158,
        'icon': <PiStudentBold />
        },

        {
        'title':'Total Teacher',
        'subtitle':14,
        'icon': <GiTeacher />
        },

        {
        'title':'Total Staff',
        'subtitle':22,
        'icon': <GiWizardStaff />
        },

        
    ]

  return (
  <div className='py-10'>
    <div className='text-xl md:text-2xl font-bold py-5 text-center'>
        Madrasah In Numbers
    </div>
        <div className='bg-[#1B4962] w-full flex items-center justify-around'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-2 md:h-90 px-10 w-full py-16'>
            {institDetails.map((item,index)=>(
            <div key={index} className='text-center flex flex-col justify-center  items-center'>

                {/* list icon */}
                
                <div className='bg-blue-400 rounded-full h-15 w-15 mb-4 flex justify-center items-center '>
                    <div className='text-2xl text-white'>
                        {item.icon}
                    </div>
                </div>

                {/* subtitle */}
                <div className='text-4xl font-bold text-white mb-4'>
                    +{item.subtitle}
                </div>

                {/* title */}
                <div className='text-[15px] text-white'>
                    {item.title}
                </div>

            </div> 
            ))}
            </div>
        </div>
  </div>
  )
}

export default InstituteSummary