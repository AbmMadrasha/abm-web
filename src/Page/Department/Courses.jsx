import React from 'react'
import { LiaQuranSolid } from "react-icons/lia";
import { SiGeneralmotors, SiCoursera } from "react-icons/si";

const Courses = () => {

  const courses = [
    { title: 'Kitab Department', Icon: <SiGeneralmotors /> },
    { title: 'Hifz Department', Icon: <LiaQuranSolid /> },
    { title: 'Assaf Altaheeli 1-Year', Icon: <SiCoursera /> },
    { title: 'Arabic Language Learning Course', Icon: <SiCoursera /> },
    { title: 'E-Learning', Icon: <SiCoursera /> }
  ]

  return (
    <div className='px-6 md:px-10 py-20'>

      <div className='text-2xl font-bold  text-center py-5'>
        All Course
      </div>

      {/* Container */}
      <div className='flex justify-center'>

        {/* Grid / Row */}
        <div className='grid grid-cols-1 md:grid md:grid-cols-3 gap-2 w-full max-w-4xl overflow-x-auto md:overflow-visible'>

          {courses.map((item, index) => (
            <div 
              key={index} 
              className='min-w-200px bg-white rounded-xl p-6 flex flex-col items-center justify-center transition'>

              {/* Icon */}
              <div className='text-7xl mb-4'>
                {item.Icon}
              </div>

              {/* Title */}
              <div className='text-3xl font-semibold text-center'>
                {item.title}
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Courses