export type TTrailerUIProps = {
  src?: string;
  poster?: string;
  alt?: string;
  isPlaying?: boolean;
  showControls?: boolean;
  isHidden?: boolean;
  onCanPlay?: () => void;
  onPlay?: () => void;
  onPause?: () => void;
  onClick?: () => void;
  onEnded?: () => void;
  onShowControls?: () => void;
  onHideControls?: () => void;
};
