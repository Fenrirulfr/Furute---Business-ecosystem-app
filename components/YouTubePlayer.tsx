import React, { useState } from 'react';

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
  className?: string;
  autoplay?: boolean;
  listId?: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId, title, className = "", autoplay = false, listId }) => {
  const [isPlaying, setIsPlaying] = useState(autoplay);

  if (isPlaying) {
    let src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    if (listId) {
      src += `&list=${listId}`;
    }
    return (
      <div className={`relative w-full aspect-video-player rounded-[2.5rem] overflow-hidden shadow-2xl bg-black border-4 border-white dark:border-white/10 ${className}`}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={src}
          title={title || "YouTube video player"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="eager" // Load immediately once state changes
        ></iframe>
      </div>
    );
  }

  return (
    <div 
      className={`relative w-full aspect-video-player rounded-[2.5rem] overflow-hidden shadow-2xl bg-black border-4 border-white dark:border-white/10 cursor-pointer group ${className}`}
      onClick={() => setIsPlaying(true)}
      aria-label={`Play video: ${title}`}
      role="button"
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title || 'Video Thumbnail'}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
        <div className="size-20 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center border border-white/50 group-hover:scale-110 group-hover:bg-brand-blue dark:group-hover:bg-brand-red transition-all">
          <span className="material-symbols-outlined text-white text-5xl">play_arrow</span>
        </div>
      </div>
    </div>
  );
};

export default YouTubePlayer;