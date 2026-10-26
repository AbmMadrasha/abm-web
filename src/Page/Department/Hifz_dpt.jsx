import React from 'react'
import { FaQuran } from "react-icons/fa";

const Hifz_dpt = () => {

    const hifz = [
        { id: 1, title: 'Group-1', Icon: <FaQuran /> },
        { id: 2, title: 'Group-2', Icon: <FaQuran /> },
        { id: 3, title: 'Najara', Icon: <FaQuran /> },
    ]

    return (

        <div className='mt-10 mb-20 px-4 md:px-10'>

            {/* Title */}
            <h1 className='text-gray-500 text-xl tracking-[4px] font-semibold mb-6'>
                HIFZ
            </h1>

            {/* Cards */}
            <div className='
                grid grid-cols-1 
                sm:grid-cols-2 
                lg:grid-cols-3
                gap-5
            '>

                {
                    hifz.map((item) => (

                        <div
                            key={item.id}
                            className='
                                group
                                bg-white
                                rounded-2xl
                                shadow-md
                                hover:shadow-xl
                                transition-all
                                duration-300
                                overflow-hidden
                                flex items-center
                                justify-between
                                p-12
                                border border-gray-100
                                hover:-translate-y-1
                            '
                        >

                            {/* Left Side */}
                            <div className='flex flex-col gap-3 w-full'>

                                {/* Class Name */}
                                <h2 className='
                                    text-lg
                                    font-semibold
                                    text-gray-700
                                    group-hover:text-[#1D4961]
                                    transition-all
                                '>
                                    {item.title}
                                </h2>

                                {/* Colored Line */}
                                <div className='
                                    w-1/2
                                    h-1
                                    bg-linear-to-r
                                    from-[#1D4961]
                                    to-amber-400
                                    rounded-full
                                '></div>

                            </div>

                            {/* Icon */}
                            <div className='
                                text-4xl
                                text-[#1D4961]
                                bg-blue-50
                                p-4
                                rounded-full
                                group-hover:bg-amber-100
                                group-hover:text-amber-500
                                transition-all
                                duration-300
                            '>
                                {item.Icon}
                            </div>

                        </div>

                    ))
                }

            </div>

        </div>
    )
}

export default Hifz_dpt