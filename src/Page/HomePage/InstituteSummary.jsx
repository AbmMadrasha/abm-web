import React, { useState, useEffect } from 'react';
import { SiGoogleclassroom } from "react-icons/si";
import { GiTeacher, GiWizardStaff } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { FcDepartment } from "react-icons/fc";

const API_BASE = 'https://oracleapex.com/ords/abmc_ws/api';
const SUMMARY_URL = `${API_BASE}/institute-summary/`;

// Fallback data in case API fails
const FALLBACK_DATA = [
  { id: 1, title: 'Total Departments', count: 5, icon_name: 'department' },
  { id: 2, title: 'Total Classes', count: 10, icon_name: 'class' },
  { id: 3, title: 'Total Students', count: 158, icon_name: 'student' },
  { id: 4, title: 'Total Teacher', count: 14, icon_name: 'teacher' },
  { id: 5, title: 'Total Staff', count: 22, icon_name: 'staff' },
];

// Map the string from the DB to the actual React Icon Component
const iconMap = {
  department: <FcDepartment />,
  class: <SiGoogleclassroom />,
  student: <PiStudentBold />,
  teacher: <GiTeacher />,
  staff: <GiWizardStaff />,
};

const InstituteSummary = () => {
  const [institDetails, setInstitDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await fetch(SUMMARY_URL);
        if (!res.ok) throw new Error('Failed to fetch');
        
        const data = await res.json();
        
        // Handle both plain array and ORDS envelope
        let rawData = [];
        if (Array.isArray(data)) {
          rawData = data;
        } else if (data.items && data.items.length > 0) {
          rawData = typeof data.items[0].json_result === 'string' 
            ? JSON.parse(data.items[0].json_result) 
            : data.items;
        }

        setInstitDetails(rawData.length > 0 ? rawData : FALLBACK_DATA);
      } catch (err) {
        console.error("Summary API failed:", err);
        setInstitDetails(FALLBACK_DATA);
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, []);

  return (
    <div className="py-10">
      <div className="text-xl md:text-2xl font-bold py-5 text-center">
        Madrasah In Numbers
      </div>
      
      <div className="bg-[#1B4962] w-full flex items-center justify-around">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-2 md:h-90 px-10 w-full py-16">
          
          {loading ? (
            // Loading Skeleton
            Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center animate-pulse">
                <div className="bg-blue-900/50 rounded-full h-15 w-15 mb-4" />
                <div className="h-8 w-16 bg-blue-900/50 rounded mb-4" />
                <div className="h-4 w-24 bg-blue-900/50 rounded" />
              </div>
            ))
          ) : (
            institDetails.map((item, index) => (
              <div key={item.id || index} className="text-center flex flex-col justify-center items-center">
                
                {/* List Icon (Dynamically fetched from iconMap) */}
                <div className="bg-blue-400 rounded-full h-15 w-15 mb-4 flex justify-center items-center">
                  <div className="text-2xl text-white">
                    {/* If icon_name exists use it, otherwise default to department */}
                    {iconMap[item.icon_name] || <FcDepartment />}
                  </div>
                </div>

                {/* Subtitle (Count) */}
                <div className="text-4xl font-bold text-white mb-4">
                  +{item.count}
                </div>

                {/* Title */}
                <div className="text-[15px] text-white">
                  {item.title}
                </div>

              </div>
            ))
          )}

        </div>
      </div>
    </div>
  );
};

export default InstituteSummary;