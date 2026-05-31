import { useMedia } from "../../../hooks/useMedia";

export const useGalleryGap = (): number => {
  const { isLarge } = useMedia();

  return isLarge ? 68 : 32;
};
