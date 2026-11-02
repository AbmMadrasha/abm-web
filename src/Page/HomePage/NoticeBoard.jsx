import React, { useState, useEffect } from 'react';

const API_BASE = 'https://oracleapex.com/ords/abmc_ws/api';
const NOTICES_URL = `${API_BASE}/notices/`;

// Fallback data in case the API fails or returns empty
const FALLBACK_NOTICES = [
  { id: 1, datetime: '20 Mar 2026', title: 'Ramadan Special', subtitle: 'We are announced that we are going to take class on Ramadan' },
  { id: 2, datetime: '21 Mar 2026', title: 'Ramadan Holiday', subtitle: 'Holiday from 20th Ramadan' },
  { id: 3, datetime: '23 Mar 2026', title: 'Eid Celebration', subtitle: 'Enjoy Eid ul Fitr' }
];

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await fetch(NOTICES_URL);
        if (!res.ok) throw new Error('Failed to fetch');
        
        const data = await res.json();
        
        // Handle both plain array and ORDS envelope format
        let rawData = [];
        if (Array.isArray(data)) {
          rawData = data;
        } else if (data.items && data.items.length > 0) {
          rawData = typeof data.items[0].json_result === 'string' 
            ? JSON.parse(data.items[0].json_result) 
            : data.items;
        }

        setNotices(rawData.length > 0 ? rawData : FALLBACK_NOTICES);
      } catch (err) {
        console.error("Failed to load notices:", err);
        setNotices(FALLBACK_NOTICES);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
        Notice Board
      </h2>

      <div className="space-y-4">
        {loading ? (
          // Loading Skeletons
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-24 bg-gray-200 animate-pulse rounded-lg w-full" />
          ))
        ) : (
          notices.map((item, index) => (
            <div
              key={item.id || index}
              className="flex flex-col sm:flex-row sm:items-center justify-between bg-white shadow-sm border border-gray-100 rounded-lg p-4 hover:shadow-md transition gap-4"
            >
              {/* LEFT SIDE */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
                {/* Leading (Date) */}
                <div className="bg-[#1D4961] text-white text-sm md:text-base font-semibold px-3 py-2 rounded-md text-center w-full sm:w-28 shrink-0">
                  {item.datetime}
                </div>

                {/* Title + Subtitle */}
                <div className="flex-1">
                  <h3 className="font-bold text-lg md:text-xl text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-500 mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Trailing Arrow (Hidden on mobile to save space) */}
              <div className="hidden sm:block text-gray-400 text-xl font-bold pr-2">
                →
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NoticeBoard;