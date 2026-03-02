
import React, { useEffect } from 'react';
import YouTubePlayer from './YouTubePlayer';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string | null;
  videoTitle?: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoId, videoTitle }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !videoId) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-xl transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-5xl z-10 animate-in fade-in zoom-in duration-300">
        <div className="flex justify-between items-center mb-6 text-white px-4">
          <h3 className="text-xl font-black tracking-tight">{videoTitle || 'Success Story'}</h3>
          <button 
            onClick={onClose}
            className="size-12 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center group"
          >
            <span className="material-symbols-outlined text-2xl group-hover:rotate-90 transition-transform">close</span>
          </button>
        </div>
        
        <YouTubePlayer videoId={videoId} autoplay={true} />
        
        <div className="mt-8 text-center text-white/40 text-sm font-bold uppercase tracking-widest">
          Click outside or use Close button to return
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
