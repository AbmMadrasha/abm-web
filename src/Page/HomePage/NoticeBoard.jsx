import React from 'react'

const NoticeBoard = () => {

  const notice = [
    {
      datetime: '20 Mar 2026',
      title: 'Ramadan Special',
      subtitle: 'We are announced that we are going to take class on Ramadan'
    },
    {
      datetime: '21 Mar 2026',
      title: 'Ramadan Holiday',
      subtitle: 'Holiday from 20th Ramadan'
    },
    {
      datetime: '23 Mar 2026',
      title: 'Eid Celebration',
      subtitle: 'Enjoy Eid ul Fitr'
    }
  ]

  return (
    <div className='py-5 px-4 max-w-7xl mx-auto'>

      <h2 className='text-2xl font-bold text-center mb-4'>
        Notice Board
      </h2>

      <div className='space-y-3'>

        {notice.map((item, index) => (
          <div 
            key={index} 
            className='flex items-center justify-between bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition'
          >

            {/* LEFT SIDE */}
            <div className='flex items-center gap-4'>

              {/* Leading (Date) */}
              <div className='bg-[#1D4961] text-white text-2xl px-4 py-1 rounded-md text-center w-20'>
                {item.datetime}
              </div>

              {/* Title + Subtitle */}
              <div>
                <h3 className='font-semibold text-2xl'>
                  {item.title}
                </h3>
                <p className='text-2xl text-gray-500'>
                  {item.subtitle}
                </p>
              </div>

            </div>

            {/* Trailing */}
            <div className='text-gray-400 text-xl'>
              →
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default NoticeBoard