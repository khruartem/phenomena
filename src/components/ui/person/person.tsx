import type { FC } from "react";

import styles from "./person.module.css";

export const PersonUI: FC = () => {
  return (
    <div className={styles.person}>
      <img src="https://storage.yandexcloud.net/otkter-bucket/phenomena/persons/groshev.png" />
    </div>
  );
};
