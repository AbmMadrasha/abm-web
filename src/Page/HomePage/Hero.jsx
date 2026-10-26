import React, { useState, useEffect } from 'react';

export const Hero = () => {
  const [bgImage, setBgImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = 'https://oracleapex.com/ords/abmc_ws/api/hero-image/1';

    const img = new Image();
    img.src = apiUrl;
    img.onload = () => {
      setBgImage(apiUrl);
      setLoading(false);
    };
    img.onerror = () => {
      console.error('Hero image failed to load from API:', apiUrl);
      setLoading(false);
    };
  }, []);

  return (
    <section className="relative w-full h-150px md:h-170 overflow-hidden">
      {/* Background Image Layer */}
      {bgImage && (
        <div
          className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url("${bgImage}")` }}
        />
      )}

      {/* Loading placeholder */}
      {loading && (
        <div className="absolute inset-0 z-0 bg-gray-800 animate-pulse" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60" />

      {/* Content Layer — centered both ways */}
      <div className="relative z-20 flex flex-col items-center justify-center gap-8 px-6 sm:px-8 md:px-12 py-16 md:py-20 min-h-screen md:min-h-[85vh] w-full">
        <div className="text-white text-center max-w-5xl mx-auto">
          <h2 className="font-anton text-6xl sm:text-6xl md:text-6xl lg:text-7xl py-4 md:py-8 leading-tight">
            ABU BAKAR (RA.) MADRASAH CHATTOGRAM
          </h2>
          <p className="text-4xl sm:text-xl md:text-3xl lg:text-4xl font-bold leading-relaxed">
            A premier madrasah for the{' '}
            <span className="text-amber-400 font-bold">The ARABIC </span>
            language and <br className="hidden sm:block" />
            <span className="text-amber-400">Correct Islamic</span> Education
          </p>

          <button className="bg-amber-600 text-white h-12 mt-6 px-8 rounded-sm cursor-pointer hover:bg-[#153a4d] transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;