import { useState, useEffect, type FC } from "react";

import { CountdownTimerUI } from "../ui/countdown-timer";

import type { TCountdownTimerProps } from "./types";
import type { TTimeLeft } from "../../utils/types";

export const CountdownTimer: FC<TCountdownTimerProps> = ({ content }) => {
  const [timeLeft, setTimeLeft] = useState<TTimeLeft>({
    daysLeft: "",
    hoursLeft: "",
    minutesLeft: "",
    secondsLeft: "",
  }); // Оставшееся время для отображения
  const [showContent, setShowContent] = useState<boolean>(false); // Флаг показа лэндинга

  const cycleDuration = 24 * 60 * 60 * 1000; // Цикл: дни в миллисекундах

  useEffect(() => {
    // Прошло больше положенного времени
    if (showContent) return;

    const updateTimeLeft = () => {
      // Фиксируем дату старта (например, конкретный момент времени)
      const globalStartDate = new Date("2026-02-17T22:08:00Z"); // ISO формат
      const now = new Date(); // Текущее глобальное время
      const elapsed = +now - +globalStartDate; // Время, прошедшее с момента старта (в миллисекундах)
      const remainingTimeMs = cycleDuration - (elapsed % cycleDuration); // Время до окончания текущих N дней

      // Если времени больше нет (0 или отрицательное значение), показываем лэндинг
      if (elapsed > cycleDuration) {
        setShowContent(true);
        return;
      }

      // Вычисляем дни, часы, минуты и секунды из миллисекунд
      const daysLeft = String(
        Math.floor(remainingTimeMs / (24 * 60 * 60 * 1000)),
      ).padStart(2, "0");
      const hoursLeft = String(
        Math.floor(
          (remainingTimeMs % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000),
        ),
      ).padStart(2, "0");
      const minutesLeft = String(
        Math.floor((remainingTimeMs % (60 * 60 * 1000)) / (60 * 1000)),
      ).padStart(2, "0");
      const secondsLeft = String(
        Math.floor((remainingTimeMs % (60 * 1000)) / 1000),
      ).padStart(2, "0");

      // Форматируем результат как DD:HH:MM:SS
      setTimeLeft({ daysLeft, hoursLeft, minutesLeft, secondsLeft });
    };

    // Обновляем значение каждую секунду
    const interval = setInterval(updateTimeLeft, 1000);

    // Первоначальное обновление
    updateTimeLeft();

    // Очистка интервала
    return () => clearInterval(interval);
  }, [cycleDuration, showContent]);

  if (showContent) {
    return content;
  }

  return <CountdownTimerUI timeLeft={timeLeft} />;
};
