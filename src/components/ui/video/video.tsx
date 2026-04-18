import { forwardRef } from "react";

import type { TVideoUIProps } from "./types";

import { Icon } from "../../icon";
import { Colors } from "../../../utils/colors";

import styles from "./video.module.css";
import clsx from "clsx";
import { useMedia } from "../../../hooks/useMedia";

export const VideoUI = forwardRef<HTMLVideoElement, TVideoUIProps>(
  (
    {
      src,
      poster,
      alt,
      isHidden,
      isPlaying,
      showControls,
      onCanPlay,
      onPlay,
      onPause,
      onEnded,
      onClick,
      onShowControls,
      onHideControls,
    },
    ref,
  ) => {
    const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

    return (
      !isHidden && (
        <div
          className={styles["video-container"]}
          onMouseEnter={onShowControls}
          onMouseLeave={onHideControls}
          style={{
            width: clsx(
              isLarge && "69.58vw",
              isDesktop && "69.99vw",
              isLaptop && "76.17vw",
              isTablet && "92.19vw",
              isMobile && "92.38vw",
            ),
            height: clsx(
              isLarge && "39.17vw",
              isDesktop && "39.24vw",
              isLaptop && "42.77vw",
              isTablet && "52.08vw",
              isMobile && "52.38vw",
            ),
          }}
        >
          <video
            src={src}
            poster={poster}
            aria-label={alt}
            onCanPlay={onCanPlay}
            onPlay={onPlay}
            onPause={onPause}
            onClick={onClick}
            onEnded={onEnded}
            playsInline
            className={styles.video}
            ref={ref}
          />
          <button
            onClick={onClick ?? (() => {})}
            className={clsx(
              styles.video__button,
              showControls
                ? styles.video__button_shown
                : styles.video__button_hidden,
            )}
          >
            {isPlaying ? (
              <Icon name={"pause"} width={80} height={80} color={Colors.Fire} />
            ) : (
              <Icon name={"play"} width={80} height={80} color={Colors.Fire} />
            )}
          </button>
        </div>
      )
    );
  },
);
