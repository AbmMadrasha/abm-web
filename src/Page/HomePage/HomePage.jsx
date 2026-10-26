import React from 'react'
import { Hero } from './Hero'
import InstituteSummary from './InstituteSummary'
import MadarashaNewsCalendar from './MadarashaNewsCalendar'
import MadrashaCalendar from './Madrasha_Calendar'
import Principle from './Principle'
import NoticeBoard from './NoticeBoard'
import Achievement from './Achievement'



const HomePage = () => {
  return (
    <div className='py-10'>
      <Hero/>
      <MadarashaNewsCalendar/>
      <MadrashaCalendar/>
      <NoticeBoard/>
      <Achievement/>
      <InstituteSummary/>
      <Principle/>
    </div>

  )
}

export default HomePage
