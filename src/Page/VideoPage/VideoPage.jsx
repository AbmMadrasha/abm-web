import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import YouTubeEmbed from "../../component/youtube_video/YouTubeEmbed";
import { videos } from "../../data/videos";

const VideoPage = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();

  const activeVideo = videos.find((v) => v.id === videoId) || videos[0];

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 py-20 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Player */}
        <section className="lg:col-span-2">
          <YouTubeEmbed videoId={activeVideo.id} title={activeVideo.title} />

          <div className="mt-4">
            <h2 className="text-xl font-semibold">{activeVideo.title}</h2>
            <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
              {activeVideo.description}
            </p>
            <a
              href={`https://www.youtube.com/watch?v=${activeVideo.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm font-semibold text-red-500 hover:text-red-400"
            >
              ▶ Watch on YouTube
            </a>
          </div>
        </section>

        {/* Playlist */}
        <aside className="lg:col-span-1">
          <h3 className="text-base font-semibold text-neutral-300 mb-3">
            More Videos
          </h3>
          <div className="flex flex-col gap-3">
            {videos.map((video) => {
              const isActive = activeVideo.id === video.id;
              return (
                <button
                  key={video.id}
                  onClick={() => navigate(`/videos/${video.id}`)}
                  className={`flex gap-3 p-2 rounded-lg text-left transition-colors ${
                    isActive
                      ? "bg-neutral-800 ring-2 ring-red-500"
                      : "bg-neutral-900 hover:bg-neutral-800"
                  }`}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-28 h-16 object-cover rounded-md flex-shrink-0"
                    onError={(e) => {
                      e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
                    }}
                  />
                  <div className="flex flex-col justify-center overflow-hidden">
                    <p className="text-sm font-semibold truncate">
                      {video.title}
                    </p>
                    <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default VideoPage;