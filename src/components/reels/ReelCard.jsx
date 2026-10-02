import { Play, Pause, Volume2, VolumeX, Loader2 } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

const ReelCard = ({
  reel,
  index,
  active,
  visible,
  isMuted,
  onToggleMute,
  onEnded,
  onClick,
  preload = "metadata",
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [progress, setProgress] = useState(0);

  // Synchronize playback with active & visible states
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isCurrent = true;

    if (active && visible) {
      video.muted = isMuted;
      video.defaultMuted = isMuted;
      video.playbackRate = 1.0;

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            if (!isCurrent) {
              video.pause();
            } else {
              setIsPlaying(true);
              setIsBuffering(false);
            }
          })
          .catch((err) => {
            if (err.name !== "AbortError") {
              console.warn("Video playback prevented:", err);
            }
            if (isCurrent) {
              setIsPlaying(false);
            }
          });
      }
    } else {
      // Inactive card or scrolled out of view:
      // Instantly mute and pause to eliminate any audio overlap
      video.muted = true;
      video.pause();
      video.currentTime = 0;
      setIsPlaying(false);
      setIsBuffering(false);
      setProgress(0);
    }

    return () => {
      isCurrent = false;
      if (video) {
        video.muted = true;
        video.pause();
      }
    };
  }, [active, visible, isMuted]);

  // Synchronize mute state when user toggles volume
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (active) {
      video.muted = isMuted;
    }
  }, [isMuted, active]);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const current = video.currentTime;
    const dur = video.duration;
    if (dur > 0) {
      setProgress((current / dur) * 100);
    }
  }, []);

  const handleEnded = useCallback(() => {
    setIsPlaying(false);
    setProgress(100);
    if (onEnded) {
      onEnded();
    }
  }, [onEnded]);

  const handleWaiting = useCallback(() => {
    if (active) {
      setIsBuffering(true);
    }
  }, [active]);

  const handlePlaying = useCallback(() => {
    setIsBuffering(false);
    setIsPlaying(true);
  }, []);

  const handleCanPlay = useCallback(() => {
    setIsBuffering(false);
  }, []);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  const handleCardClick = () => {
    if (!active) {
      onClick?.();
    } else {
      togglePlay();
    }
  };

  const handleMuteClick = (e) => {
    e.stopPropagation();
    onToggleMute?.();
  };

  return (
    <div
      onClick={handleCardClick}
      className={`
        group
        relative
        overflow-hidden
        rounded-[32px]
        cursor-pointer
        select-none
        transform-gpu
        will-change-transform
        transition-all
        duration-300
        ease-out
        ${
          active
            ? "scale-100 ring-2 ring-[#810c26] shadow-xl shadow-[#810c26]/20 -translate-y-1"
            : "scale-[0.93] opacity-75 hover:opacity-90 hover:scale-[0.95]"
        }
      `}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={reel.videoUrl || reel.url}
        playsInline
        webkit-playsinline="true"
        x5-playsinline="true"
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        preload={preload}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        onWaiting={handleWaiting}
        onPlaying={handlePlaying}
        onCanPlay={handleCanPlay}
        className="
          aspect-[9/16]
          w-full
          h-full
          object-cover
          bg-black
          select-none
          pointer-events-none
        "
      />

      {/* Ambient Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/25 pointer-events-none" />

      {/* Active "NOW PLAYING" Badge */}
      {active && (
        <div
          className="
            absolute
            left-4
            top-4
            z-20
            flex
            items-center
            gap-1.5
            rounded-full
            bg-[#810c26]
            px-3.5
            py-1
            text-xs
            font-semibold
            tracking-wider
            text-white
            shadow-md
            pointer-events-none
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          NOW PLAYING
        </div>
      )}

      {/* Mute / Unmute Toggle Button */}
      {active && (
        <button
          onClick={handleMuteClick}
          aria-label={isMuted ? "Unmute reel audio" : "Mute reel audio"}
          className="
            absolute
            right-4
            top-4
            z-30
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-black/45
            text-white
            backdrop-blur-md
            border border-white/10
            hover:bg-black/65
            hover:scale-105
            active:scale-95
            transition-all
            duration-200
            cursor-pointer
          "
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      )}

      {/* Buffering Indicator */}
      {active && isBuffering && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 pointer-events-none">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md">
            <Loader2 size={28} className="animate-spin text-white" />
          </div>
        </div>
      )}

      {/* Big Play / Pause Overlay Icon */}
      {active && !isBuffering && (
        <>
          {/* Pause Button shown on desktop hover while playing */}
          {isPlaying && (
            <div
              className="
                absolute
                left-1/2
                top-1/2
                z-20
                flex
                h-16
                w-16
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-black/45
                text-white
                backdrop-blur-md
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-200
                pointer-events-none
              "
            >
              <Pause size={28} />
            </div>
          )}

          {/* Play Button shown when video is paused */}
          {!isPlaying && (
            <div
              className="
                absolute
                left-1/2
                top-1/2
                z-20
                flex
                h-16
                w-16
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-black/55
                text-white
                backdrop-blur-md
                shadow-lg
                transition-transform
                duration-200
                hover:scale-105
                pointer-events-none
              "
            >
              <Play size={28} fill="white" className="ml-1" />
            </div>
          )}
        </>
      )}

      {/* Inactive card Play prompt */}
      {!active && (
        <div
          className="
            absolute
            left-1/2
            top-1/2
            z-20
            flex
            h-12
            w-12
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-black/40
            text-white/80
            backdrop-blur-sm
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-200
            pointer-events-none
          "
        >
          <Play size={22} fill="white" className="ml-0.5" />
        </div>
      )}

      {/* Bottom Brand / Title Overlay */}
      <div className="absolute bottom-3 left-0 w-full px-5 py-2 pointer-events-none z-10">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#f9e4bf]" />
          <span className="text-sm font-semibold tracking-wide text-[#f9e4bf] drop-shadow-sm">
            We Make Sweets
          </span>
        </div>
      </div>

      {/* Progress Bar (at the bottom of the active reel) */}
      {active && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 overflow-hidden z-20 pointer-events-none">
          <div
            className="h-full bg-gradient-to-r from-pink-500 via-[#f9e4bf] to-[#810c26] transition-[width] duration-150 ease-linear rounded-r-full"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default ReelCard;