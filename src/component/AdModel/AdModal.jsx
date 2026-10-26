import React, { useState, useEffect } from 'react';

const AdModal = ({ adId, imageUrl, targetLink }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check which specific ad ID the user last closed
    const lastSeenAdId = localStorage.getItem('lastSeenAdId');

    // If the current adId doesn't match what's saved, show the modal!
    if (lastSeenAdId !== adId) {
      setIsVisible(true);
    }
  }, [adId]);

  const handleClose = () => {
    // Save the current ad ID so it won't show again for this specific version
    localStorage.setItem('lastSeenAdId', adId);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="relative max-w-lg w-full bg-white rounded-xl p-3 shadow-2xl">
        <button 
          onClick={handleClose} 
          className="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold shadow-md transition-colors cursor-pointer"
          aria-label="Close Advertisement"
        >
          &times;
        </button>

        <a href={targetLink || '#'} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg">
          <img 
            src={imageUrl} 
            alt="Advertisement" 
            className="w-full h-auto object-cover rounded-lg" 
          />
        </a>
      </div>
    </div>
  );
};

export default AdModal;