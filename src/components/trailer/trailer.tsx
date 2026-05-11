import { useRef, useState, type FC } from "react";

import { TrailerUI } from "../ui/trailer";

export const Trailer: FC = () => {
  const [trailerSrc, setTrailerSrc] = useState<string | undefined>(undefined);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const trailerRef = useRef<HTMLVideoElement>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const source =
    "https://storage.yandexcloud.net/otkter-bucket/hero/season_1/video_hero.mp4";
  const poster =
    "https://storage.yandexcloud.net/otkter-bucket/hero/season_1/video_poster.webp";
  const showControls = !isPlaying || isHovered;

  const clearHideTimeout = () => {
    if (hideTimeoutRef.current !== null) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  };

  const handleEnded = () => {
    setTrailerSrc(undefined);
    trailerRef.current?.load();
  };

  const handleCanPlay = () => {
    if (trailerSrc) {
      trailerRef.current?.play();
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleShowControls = () => {
    clearHideTimeout();
    setIsHovered(true);

    // Авто-скрытие для тач-устройств
    hideTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 1500);
  };

  const handleHideControls = () => {
    // Для мыши — скрываем сразу, без таймера
    clearHideTimeout();

    setIsHovered(false);
  };

  const togglePlay = () => {
    const Trailer = trailerRef.current;

    if (!Trailer) return;

    if (!trailerSrc) {
      setTrailerSrc(source);
    }

    if (Trailer.paused) {
      Trailer.play();
    } else Trailer.pause();
  };

  return (
    <TrailerUI
      src={trailerSrc}
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
      ref={trailerRef}
    />
  );
};
