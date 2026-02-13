import { useState, type FC } from "react";

import { MainUI } from "../ui/main";

export const Main: FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = (count: number) => {
    setCount(count);
  };

  return <MainUI count={count} onClick={() => handleClick(count + 1)} />;
};
