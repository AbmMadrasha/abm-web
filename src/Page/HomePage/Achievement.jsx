import React, { useEffect, useState } from 'react';

const API_BASE = 'https://oracleapex.com/ords/abmc_ws/api';
const ACHIEVEMENTS_URL = `${API_BASE}/achievements/`;
const achievementImageUrl = (id) => `${API_BASE}/achievement-image/${id}`;

const FALLBACK_ACHIEVEMENTS = [
  { achievement_id: 1, title: 'Top Madrasah Award', subtitle: 'Recognized for academic excellence 2024', image_url: 'https://static.vecteezy.com/system/resources/thumbnails/033/118/925/small/brown-flat-islamic-background-ai-generative-free-photo.jpg' },
  { achievement_id: 2, title: 'Hifz Competition Winner', subtitle: 'First place in regional Quran memorization', image_url: 'https://png.pngtree.com/thumb_back/fh260/background/20250224/pngtree-islamic-ramadan-backgrounds-in-4k-and-hd-image_16905990.jpg' },
  { achievement_id: 3, title: 'Arabic Debate Champion', subtitle: 'State-level Arabic debate competition', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRchiis-x4u0T1-1goZs271P0dRCoYmHcoKPg&s' },
  { achievement_id: 4, title: 'Islamic Studies Excellence', subtitle: '100% pass rate in Islamic Studies', image_url: 'https://img.freepik.com/free-photo/moon-light-shine-through-window-into-islamic-mosque-interior_1217-2597.jpg?semt=ais_incoming&w=740&q=80' },
];

const Achievement = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(ACHIEVEMENTS_URL).then(r => r.ok ? r.json() : Promise.reject(r.status));

        // Unwrap ORDS envelope if needed
        let raw = [];
        if (Array.isArray(res)) raw = res;
        else if (Array.isArray(res.items) && res.items.length > 0) {
          const first = res.items[0];
          if (first && typeof first.json_result === 'string') {
            try { raw = JSON.parse(first.json_result); } catch (e) { console.error(e); }
          } else {
            raw = res.items;
          }
        }

        const items = raw.map(a => ({
          achievement_id: a.achievement_id,
          title: a.title,
          subtitle: a.subtitle,
          image_url: achievementImageUrl(a.achievement_id),
        }));

        setAchievements(items.length ? items : FALLBACK_ACHIEVEMENTS);
      } catch (err) {
        console.error('Achievements API failed:', err);
        setAchievements(FALLBACK_ACHIEVEMENTS);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="py-10 px-4 sm:px-6 md:px-10">
      <h3 className="font-bold text-2xl sm:text-3xl py-6 md:py-8">Our Achievements</h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-2xl bg-gray-200 animate-pulse h-64" />
            ))
          : achievements.map((item, index) => (
              <div
                key={item.achievement_id ?? index}
                className="border border-gray-300 rounded-2xl overflow-hidden flex flex-col"
              >
                {/* Image on top */}
                <img
                  src={item.image_url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-40 sm:h-48 object-cover"
                  onError={() => console.error('Achievement image failed:', item.image_url)}
                />

                {/* Text below */}
                <div className="p-3 sm:p-4 flex flex-col gap-1">
                  <div className="font-bold text-sm sm:text-lg leading-snug">
                    {item.title}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 leading-snug">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Achievement;