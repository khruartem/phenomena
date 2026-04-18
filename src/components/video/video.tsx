import { useRef, useState, type FC } from "react";

import { VideoUI } from "../ui/video";

export const Video: FC = () => {
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const source =
    "https://storage.yandexcloud.net/otkter-bucket/hero/season_1/video_hero.mp4";
  const poster =
    "https://storage.yandexcloud.net/otkter-bucket/hero/season_1/video_poster.webp";
  const showControls = !isPlaying || isHovered;

  const handleEnded = () => {
    setVideoSrc(undefined);
    videoRef.current?.load();
  };

  const handleCanPlay = () => {
    videoRef.current?.play();
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleShowControls = () => {
    setIsHovered(true);
  };

  const handleHideControls = () => {
    setIsHovered(false);
  };

  const togglePlay = () => {
    const video = videoRef.current;

    if (!video) return;

    if (!videoSrc) {
      setVideoSrc(source);
    }

    if (video.paused) {
      video.play();
    } else video.pause();
  };

  return (
    <VideoUI
      src={videoSrc}
      poster={poster}
      alt={"Трейлер спектактя"}
      isPlaying={isPlaying}
      showControls={showControls}
      onCanPlay={handleCanPlay}
      onPlay={handlePlay}
      onPause={handlePause}
      onEnded={handleEnded}
      onClick={togglePlay}
      onShowControls={handleShowControls}
      onHideControls={handleHideControls}
      ref={videoRef}
    />
  );
};
