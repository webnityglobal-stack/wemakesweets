import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// const ReelCard = ({ reel, active, visible }) => {
    const ReelCard = ({ reel, active, visible, onClick }) => {
  const videoRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

useEffect(() => {
  const video = videoRef.current;

  if (!video) return;

  if (active && visible) {
    video
      .play()
      .then(() => setPlaying(true))
      .catch(() => {});
  } else {
    video.pause();
    video.currentTime = 0;
    setPlaying(false);
  }
}, [active, visible]);

  const togglePlay = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;

    video.muted = !video.muted;

    setMuted(video.muted);
  };

  return (
    <div
      onClick={onClick}
      className={`
        group
        relative
        overflow-hidden
        rounded-[32px]
        transition-all
       duration-700 ease-out
        ${
        //   active
        //     ? "scale-100 shadow-[0_30px_60px_rgba(129,12,38,0.35)] ring-2 ring-[#810c26]"
        //     : "scale-95 opacity-80"
        active
  ? "scale-100 -translate-y-3 shadow-[0_35px_70px_rgba(129,12,38,0.35)] ring-2 ring-[#810c26]"
  : "scale-[0.92] opacity-70"
        }
      `}
    >
      {/* Video */}

      <video
        ref={videoRef}
        src={reel.videoUrl}
        loop
        muted
        playsInline
        preload="metadata"
        className="
          aspect-[9/16]
          w-full
          object-cover
          bg-black
          transition-transform
          duration-700
         group-hover:scale-[1.12]
        "
      />

      {/* Gradient */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Play */}

      <button
        // onClick={togglePlay}
        onClick={(e) => {
  e.stopPropagation();
  togglePlay();
}}
        className="
          absolute
          left-1/2
          top-1/2
          flex
          h-16
          w-16
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-white/20
          text-white
          backdrop-blur-lg
          opacity-0
          transition
          duration-300
          group-hover:opacity-100
        "
      >
        {playing ? (
          <Pause size={28} />
        ) : (
          <Play size={28} fill="white" />
        )}
      </button>

      {/* Mute */}

      <button
        // onClick={toggleMute}
        onClick={(e) => {
  e.stopPropagation();
  toggleMute();
}}
        className="
          absolute
          right-4
          top-4
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-black/35
          text-white
          backdrop-blur-lg
        "
      >
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>

      {/* Active Badge */}

      {active && (
        <div
          className="
            absolute
            left-4
            top-4
            rounded-full
            bg-[#810c26]
            px-4
            py-1
            text-xs
            font-semibold
            tracking-wide
            text-white
          "
        >
          NOW PLAYING
        </div>
      )}

      {/* Bottom Overlay */}

      <div className="absolute bottom-0 left-0 w-full p-5">

        <div className="flex items-center gap-2">

          <span className="h-2 w-2 rounded-full bg-[#f9e4bf]" />

          <span className="text-sm font-medium text-[#f9e4bf]">
            We Make Sweets
          </span>

        </div>

      </div>
    </div>
  );
};

export default ReelCard;