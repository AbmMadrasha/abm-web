import React from 'react'
import { FaChildren } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";


const Kitab_dpt = () => {

    // PRIMARY STAGE
    const primary = [
        { id: 1, title: 'Nursery', Icon: <FaChildren /> },
        { id: 2, title: 'Class-1', Icon: <FaChildren /> },
        { id: 3, title: 'Class-2', Icon: <FaChildren /> },
        { id: 4, title: 'Class-3', Icon: <FaChildren /> },
        { id: 5, title: 'Class-4', Icon: <FaChildren /> },
        { id: 6, title: 'Class-5', Icon: <FaChildren /> },
    ]

    // MIDDLE STAGE
    const middle = [
        { id: 7, title: 'Class-6', Icon: <PiStudentBold /> },
        { id: 8, title: 'Class-7', Icon: <PiStudentBold /> },
        { id: 9, title: 'Class-8', Icon: <PiStudentBold /> },
        { id: 10, title: 'Class-9', Icon: <PiStudentBold /> },
        { id: 11, title: 'Class-10', Icon: <PiStudentBold /> },
    ]

    // CARD COMPONENT (reusable)
    const Card = ({ item }) => (
        <div className='
            group
            bg-white
            rounded-2xl
            shadow-md
            hover:shadow-xl
            transition-all
            duration-300
            overflow-hidden
            flex items-center justify-between
            p-8 lg:p-10
            border border-gray-100
            hover:-translate-y-1
        '>

            {/* Left Side */}
            <div className='flex flex-col gap-3 w-full'>

                <h2 className='
                    text-lg lg:text-xl
                    font-semibold
                    text-gray-700
                    group-hover:text-[#1D4961]
                    transition-all
                '>
                    {item.title}
                </h2>

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
                text-4xl lg:text-5xl
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
    )

    return (
        <div className='mt-20 mb-20 px-4 md:px-10'>

            {/* PRIMARY SECTION */}
            <h1 className='text-gray-500 text-xl tracking-[4px] font-semibold mb-6'>
                PRIMARY
            </h1>

            <div className='
                grid grid-cols-1 
                sm:grid-cols-2 
                lg:grid-cols-6 
                gap-5 mb-12
            '>
                {primary.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>

            {/* MIDDLE SECTION */}
            <h1 className='text-gray-500 text-xl tracking-[4px] font-semibold mb-6'>
                MIDDLE
            </h1>

            <div className='
                grid grid-cols-1 
                sm:grid-cols-2 
                lg:grid-cols-5 
                gap-5
            '>
                {middle.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>

        </div>
    )
}

export default Kitab_dpt