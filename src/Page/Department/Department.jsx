import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Course from '../../Page/Department/Courses'
import Kitab_dpt from './Kitab_dpt'
import Hifz_dpt from './Hifz_dpt'

const Department = () => {
    
      
      const location = useLocation()
    
      useEffect(() => {
    
        if (location.hash) {
          const el = document.getElementById(
            location.hash.replace("#", "")
          )
          if (el) {
            el.scrollIntoView({
              behavior: "smooth"
            })
          }
        }
      }, [location])

  return (
    <div className='mt-20 text-center font-bold text-4xl flex flex-col justify-center items-center'>        
        <div id='kitab-section'>
            <Kitab_dpt/>
            </div>

        <div id='hifz-section'>
            <Hifz_dpt/>
            </div>
    </div>
  )
}

export default Department