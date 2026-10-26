import React, { useEffect, useState, useCallback } from 'react';

// 🔧 Real ORDS endpoints
const API_BASE = 'https://oracleapex.com/ords/abmc_ws/api';
const CAROUSEL_URL = `${API_BASE}/hero-carousel/`;
const NEWS_URL = `${API_BASE}/news/`;

// Image URL builders (from carousel_id / news_id)
const carouselImageUrl = (id) => `${API_BASE}/carousel-image/${id}/`;
const newsImageUrl = (id) => `${API_BASE}/news-image/${id}/`;

// Fallback in case API fails (so UI never looks empty)
const FALLBACK_CAROUSEL = [
  { carousel_id: 1, image_url: 'https://img.freepik.com/free-photo/moon-light-shine-through-window-into-islamic-mosque-interior_1217-2597.jpg?semt=ais_incoming&w=740&q=80' },
  { carousel_id: 2, image_url: 'https://png.pngtree.com/thumb_back/fh260/background/20250224/pngtree-islamic-ramadan-backgrounds-in-4k-and-hd-image_16905990.jpg' },
  { carousel_id: 3, image_url: 'https://static.vecteezy.com/system/resources/thumbnails/033/118/925/small/brown-flat-islamic-background-ai-generative-free-photo.jpg' },
];

const FALLBACK_NEWS = [
  { news_id: 1, title: 'Madrasah Admission', subtitle: '📢 Madrasa admission is now open', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRchiis-x4u0T1-1goZs271P0dRCoYmHcoKPg&s', tag1: 'Featured News', tag2: 'Community' },
  { news_id: 2, title: 'Madrasah Class Opening', subtitle: '📚 New classes will start from next week', image_url: 'https://png.pngtree.com/thumb_back/fh260/background/20250224/pngtree-islamic-ramadan-backgrounds-in-4k-and-hd-image_16905990.jpg', tag1: 'Featured News', tag2: 'Community' },
  { news_id: 3, title: 'Madrasah Ceremony', subtitle: '🏆 Students achieved great results this year', image_url: 'https://static.vecteezy.com/system/resources/thumbnails/033/118/925/small/brown-flat-islamic-background-ai-generative-free-photo.jpg', tag1: 'Featured News', tag2: 'Community' },
];

const MadarashaNewsCalendar = () => {
  const [carousel, setCarousel] = useState([]);
  const [news, setNews] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // 🔄 Fetch both APIs in parallel
useEffect(() => {
  const fetchData = async () => {
    try {
      const [carouselRes, newsRes] = await Promise.all([
        fetch(CAROUSEL_URL).then(r => r.ok ? r.json() : Promise.reject(r.status)),
        fetch(NEWS_URL).then(r => r.ok ? r.json() : Promise.reject(r.status)),
      ]);

      // 🔑 Unwrap ORDS envelope + parse the inner JSON string
      const unwrap = (res) => {
        if (!res) return [];
        // Case 1: already a plain array (best case)
        if (Array.isArray(res)) return res;
        // Case 2: ORDS envelope { items: [{ json_result: "..." }] }
        if (Array.isArray(res.items) && res.items.length > 0) {
          const first = res.items[0];
          if (first && typeof first.json_result === 'string') {
            try { return JSON.parse(first.json_result); }
            catch (e) { console.error('JSON parse failed', e); return []; }
          }
          // Case 3: ORDS items already contains row objects
          return res.items;
        }
        return [];
      };

      const carouselRaw = unwrap(carouselRes);
      const newsRaw     = unwrap(newsRes);

      // Build full image URLs
      const carouselItems = carouselRaw.map(c => ({
        carousel_id: c.carousel_id,
        image_url: `${API_BASE}/carousel-image/${c.carousel_id}/`,
      }));

      const newsItems = newsRaw.map(n => ({
        news_id: n.news_id,
        title: n.title,
        subtitle: n.subtitle,
        tag1: n.tag1,
        tag2: n.tag2,
        image_url: `${API_BASE}/news-image/${n.news_id}/`,
      }));

      setCarousel(carouselItems.length ? carouselItems : FALLBACK_CAROUSEL);
      setNews(newsItems.length ? newsItems : FALLBACK_NEWS);
    } catch (err) {
      console.error('API failed, using fallback:', err);
      setCarousel(FALLBACK_CAROUSEL);
      setNews(FALLBACK_NEWS);
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, []);

  // ⏱️ Auto-rotate carousel every 4 seconds
  useEffect(() => {
    if (carousel.length <= 1) return;
    const id = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % carousel.length);
    }, 4000);
    return () => clearInterval(id);
  }, [carousel.length]);

  const goTo = useCallback((i) => setActiveIndex(i), []);

  return (
    <div className="py-10 px-4 sm:px-6 md:px-10">
      <h3 className="font-bold text-2xl sm:text-3xl py-6 md:py-8">Main News</h3>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-between">

        {/* 📅 CAROUSEL */}
        <div className="border border-gray-300 rounded-2xl w-full md:w-1/2 overflow-hidden relative">
          {loading ? (
            <div className="w-full h-64 md:h-100 bg-gray-200 animate-pulse" />
          ) : (
            <>
              {/* Slides */}
              <div
                className="flex transition-transform duration-700 ease-in-out w-full h-64 md:h-100"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {carousel.map((slide, i) => (
                  <div
                    key={slide.carousel_id ?? i}
                    className="w-full h-full shrink-0"
                  >
                    <img
                      src={slide.image_url}
                      alt={`slide-${i}`}
                      className="w-full h-full object-fill"
                      loading={i === 0 ? 'eager' : 'lazy'}
                      onError={(e) => {
                        console.error('Carousel image failed:', slide.image_url);
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Prev / Next */}
              {carousel.length > 1 && (
                <>
                  <button
                    aria-label="Previous"
                    onClick={() => goTo((activeIndex - 1 + carousel.length) % carousel.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white w-9 h-9 rounded-full flex items-center justify-center"
                  >‹</button>
                  <button
                    aria-label="Next"
                    onClick={() => goTo((activeIndex + 1) % carousel.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white w-9 h-9 rounded-full flex items-center justify-center"
                  >›</button>

                  {/* Dots */}
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
                    {carousel.map((_, i) => (
                      <button
                        key={i}
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => goTo(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          i === activeIndex ? 'bg-white w-6' : 'bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>

        {/* 📰 NEWS LIST */}
        <div className="w-full md:w-1/2 flex flex-col gap-3">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-32 rounded-2xl bg-gray-200 animate-pulse" />
              ))
            : news.map((item, index) => (
                <div
                  key={item.news_id ?? index}
                  className="flex flex-col sm:flex-row border border-gray-300 gap-3 sm:gap-5 justify-start items-start rounded-2xl"
                >
                  <img
                    src={item.image_url}
                    alt={item.title}
                    loading="lazy"
                    className="h-32 w-full sm:w-32 object-cover rounded-2xl sm:rounded-3xl shrink-0 p-3"
                    onError={(e) => {
                      console.error('News image failed:', item.image_url);
                    }}
                  />
                  <div className="flex flex-col p-3 sm:p-4 w-full">
                    <div className="font-bold text-lg sm:text-2xl">{item.title}</div>
                    <div className="text-sm sm:text-base text-gray-700">{item.subtitle}</div>

                    <div className="mt-4 flex flex-row justify-around items-start gap-2">
                      <div className="bg-gray-100 border border-gray-300 text-[11px] sm:text-[13px] flex-1 flex justify-center items-center rounded-xs py-1">
                        {item.tag1 ?? 'Featured News'}
                      </div>
                      <div className="bg-gray-100 border border-gray-300 text-[11px] sm:text-[13px] flex-1 flex justify-center items-center rounded-xs py-1">
                        {item.tag2 ?? 'Community'}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>

      </div>
    </div>
  );
};

export default MadarashaNewsCalendar;