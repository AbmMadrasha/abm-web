import React, { useState, useEffect } from 'react';

const Madrasha_Calendar = () => {
    const [calendarDetails, setCalendarDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCalendar = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    'https://oracleapex.com/ords/abmc_ws/api/madrashaCalendar/'
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setCalendarDetails(data.items || []);
            } catch (err) {
                console.error('Error fetching calendar:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCalendar();
    }, []);

    if (loading) {
        return (
            <div className='bg-gray-100 h-auto pb-10'>
                <h2 className='py-10 px-10 text-3xl font-bold'>Madrasah Calendar</h2>
                <div className='px-10 text-center text-gray-600'>Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className='bg-gray-100 h-auto pb-10'>
                <h2 className='py-10 px-10 text-3xl font-bold'>Madrasah Calendar</h2>
                <div className='px-10 text-center text-red-600'>
                    Failed to load calendar: {error}
                </div>
            </div>
        );
    }

    if (calendarDetails.length === 0) {
        return (
            <div className='bg-gray-100 h-auto pb-10'>
                <h2 className='py-10 px-10 text-3xl font-bold'>Madrasah Calendar</h2>
                <div className='px-10 text-center text-gray-600'>
                    No calendar events available.
                </div>
            </div>
        );
    }

    return (
        <div className='bg-gray-100 h-auto pb-10'>
            {/* University Calendar Title  */}
            <h2 className='py-10 px-10 text-3xl font-bold'>Madrasah Calendar</h2>

            {/* Main details on below  */}
            <div className='px-10 grid grid-cols-1 md:grid md:grid-cols-2 gap-3 rounded-2xl'>
                {calendarDetails.map((item) => (
                    <div
                        key={item.mc_id}
                        className='bg-white border border-gray-300 flex flex-row justify-between gap-2 rounded-xl'
                    >
                        {/* 1st Part */}
                        <div className='bg-gray-100 rounded-xl m-4 overflow-hidden flex-2 md:flex-1'>
                            <div className={`text-white w-full flex flex-row justify-center items-center text-xl h-8 ${
        item.mini_headline?.trim().toLowerCase() === 'now'
            ? 'bg-green-900'
            : 'bg-blue-950'
    }`}>
                                {item.mini_headline || 'Event'}
                            </div>

                            <div className='flex flex-row gap-0 justify-around'>
                                {/* start date */}
                                <div className='px-4 py-2 flex flex-col gap-0 items-center justify-center w-full h-full'>
                                    <div className='text-gray-600 text-[13px]'>
                                        {item.st_year}
                                    </div>
                                    <div className='text-2xl font-bold'>
                                        {item.st_day}
                                    </div>
                                    <div>{item.st_month}</div>
                                </div>

                                {/* to */}
                                <div className='flex flex-row items-center justify-center'>
                                    to
                                </div>

                                {/* end date */}
                                <div className='px-4 py-2 flex flex-col gap-0 items-center justify-center w-full h-full'>
                                    <div className='text-gray-600 text-[13px]'>
                                        {item.ed_year}
                                    </div>
                                    <div className='text-2xl font-bold'>
                                        {item.ed_day}
                                    </div>
                                    <div>{item.ed_month}</div>
                                </div>
                            </div>
                        </div>

                        {/* another details */}
                        <div className='flex-1 md:flex-2'>
                            <div className='py-4 flex flex-col gap-2'>
                                <button className='bg-gray-100 border border-gray-300 w-10'>
                                    up
                                </button>

                                <div className='text-[15px] font-bold'>
                                    {item.title}
                                </div>

                                <div>
                                    {item.subtitle_details}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Madrasha_Calendar;