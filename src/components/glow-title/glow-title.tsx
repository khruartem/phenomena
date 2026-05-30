import { useRef, type FC } from "react";

import { GlowTitleSceneUI } from "../ui/glow-title-scene";
import { GlowTitleContentUI } from "../ui/glow-title-content";
import { GlowTitleBaseUI } from "../ui/glow-title-base";
import { GlowTitleTextUI } from "../ui/glow-title-text";
import { GlowTitleLitUI } from "../ui/glow-title-lit";

import { Colors } from "../../utils/colors";

export const GlowTitle: FC = () => {
  const content = useRef<HTMLDivElement | null>(null);
  const scene = useRef<HTMLDivElement | null>(null);
  const lit = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (lit.current && scene.current) {
      const litRect = lit.current?.getBoundingClientRect();

      const x = e.clientX - litRect?.left;
      const y = e.clientY - litRect?.top;

      lit.current.style.setProperty("--x", `${x}px`);
      lit.current.style.setProperty("--y", `${y}px`);

      scene.current.style.setProperty("--x", `${x}px`);
      scene.current.style.setProperty("--y", `${y}px`);
    } else return;
  };

  const handleMouseEnter = () => {
    const maskOn =
      "radial-gradient(circle 168px at var(--x) var(--y), black 0%, black 30%, transparent 100%)";
    const backgroundOn =
      "linear-gradient(180deg, var(--fire) 0%, var(--red) 100%)";

    if (lit.current && content.current) {
      lit.current.style.maskImage = maskOn;
      lit.current.style.backgroundImage = backgroundOn;
      lit.current.style.backgroundClip = "text";

      content.current.classList.add("content_blured");
    } else return;
  };

  const handleMouseLeave = () => {
    const maskOff =
      "radial-gradient(circle 0px at -9999px -9999px, black 0%, transparent 100%)";
    const backgroundOff = "unset";

    if (lit.current && content.current) {
      lit.current.style.maskImage = maskOff;
      lit.current.style.backgroundImage = backgroundOff;
      lit.current.style.backgroundClip = "unset";

      content.current.classList.remove("content_blured");
    } else return;
  };

  return (
    <GlowTitleSceneUI
      onMouseEnter={handleMouseEnter}
      onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => handleMouseMove(e)}
      onMouseLeave={handleMouseLeave}
      ref={scene}
    >
      <GlowTitleContentUI ref={content}>
        <GlowTitleBaseUI>
          <GlowTitleTextUI color={Colors.Badge} />
        </GlowTitleBaseUI>
        <GlowTitleLitUI ref={lit}>
          <GlowTitleTextUI />
        </GlowTitleLitUI>
      </GlowTitleContentUI>
    </GlowTitleSceneUI>
  );
};
