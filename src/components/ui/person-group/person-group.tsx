import { forwardRef, type CSSProperties } from "react";
import clsx from "clsx";

import { PersonUI } from "../person";

import type { TPersonGroupUIProps } from "./types";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./person-group.module.css";

export const PersonGroupUI = forwardRef<HTMLUListElement, TPersonGroupUIProps>(
  ({ persons }, ref) => {
    const { isLarge } = useMedia();

    const setCardStyle = (index: number) => {
      return {
        marginInlineEnd: clsx(
          isLarge && index === 0 && "2.40vw",
          isLarge && index === 1 && "6.04vw",
          isLarge && index === 2 && "1.98vw",
          isLarge && index === 5 && "3.33vw",
          isLarge && index === 6 && "2.29vw",
          isLarge && index === 7 && "1.04vw",
        ),
        marginBlockStart: clsx(
          isLarge && index === 0 && "5.52vw",
          isLarge && index === 1 && "7.50vw",
          isLarge && index === 3 && "9.69vw",
          isLarge && index === 4 && "-1.67vw",
          isLarge && index === 5 && "4.27vw",
          isLarge && index === 6 && "-0.52vw",
          isLarge && index === 8 && "4.27vw",
        ),
      } as CSSProperties;
    };

    return (
      <ul
        className={styles["person-grid"]}
        style={{
          gridTemplateColumns: `repeat(${isLarge ? 4 : 3}, var(--size-card))`,
        }}
        ref={ref}
      >
        {persons.map(({ info, appearance }, index) => (
          <li style={setCardStyle(index)}>
            <PersonUI
              info={info}
              appearance={{
                ...appearance,
                caption: `Изображение персонажа ${info.character} в исполнении ${info.actor}`,
              }}
            />
          </li>
        ))}
      </ul>
    );
  },
);
