import React from "react";

const YouTubeEmbed = ({ videoId, title = "YouTube video player" }) => {
  return (
    <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-2xl bg-black">
      <iframe
        className="absolute top-0 left-0 w-full h-full border-0"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;