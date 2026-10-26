import React from "react";
import { Link } from "react-router-dom";
import { videos } from "../../data/videos";

const VideoList = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 py-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">🎬 All Videos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Link
              key={video.id}
              to={`/videos/${video.id}`}
              className="group bg-neutral-900 rounded-xl overflow-hidden hover:bg-neutral-800 transition"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full aspect-video object-cover"
                onError={(e) => {
                  e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
                }}
              />
              <div className="p-4">
                <h3 className="font-semibold truncate group-hover:text-red-500">
                  {video.title}
                </h3>
                <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                  {video.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoList;