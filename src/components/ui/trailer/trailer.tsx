import { forwardRef } from "react";
import clsx from "clsx";

import type { TTrailerUIProps } from "./types";

import { Icon } from "../../icon";
import { Colors } from "../../../utils/colors";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./trailer.module.css";

export const TrailerUI = forwardRef<HTMLVideoElement, TTrailerUIProps>(
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
          className={styles.trailer}
          onMouseEnter={onShowControls}
          onMouseLeave={onHideControls}
          onTouchStart={onShowControls}
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
            className={styles.trailer__video}
            ref={ref}
          />
          <button
            onClick={onClick ?? (() => {})}
            className={clsx(
              styles.trailer__button,
              showControls
                ? styles.trailer__button_shown
                : styles.trailer__button_hidden,
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
