import { useState, useEffect, type FC } from "react";
import { Main } from "../main";
import { CountdownTimerUI } from "../ui/countdown-timer";

export const CountdownTimer: FC = () => {
  const [timeLeft, setTimeLeft] = useState(""); // Оставшееся время для отображения
  const [showLanding, setShowLanding] = useState(false); // Флаг показа лэндинга

  const cycleDuration = 24 * 60 * 60 * 1000; // Цикл: дни в миллисекундах

  useEffect(() => {
    // Фиксируем дату старта (например, конкретный момент времени)
    const globalStartDate = new Date("2026-02-14T20:52:00Z"); // ISO формат

    const updateTimeLeft = () => {
      const now = new Date(); // Текущее глобальное время
      const elapsed = +now - +globalStartDate; // Время, прошедшее с момента старта (в миллисекундах)
      const remainingTimeMs = cycleDuration - (elapsed % cycleDuration); // Время до окончания текущих 30 дней

      // Если времени больше нет (0 или отрицательное значение), показываем лэндинг
      if (remainingTimeMs <= 0) {
        setShowLanding(true);
        return;
      }

      // Вычисляем дни, часы, минуты и секунды из миллисекунд
      const days = Math.floor(remainingTimeMs / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (remainingTimeMs % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000),
      );
      const minutes = Math.floor(
        (remainingTimeMs % (60 * 60 * 1000)) / (60 * 1000),
      );
      const seconds = Math.floor((remainingTimeMs % (60 * 1000)) / 1000);

      // Форматируем результат как DD:HH:MM:SS
      setTimeLeft(
        `${String(days).padStart(2, "0")}:${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`,
      );
    };

    // Обновляем значение каждую секунду
    const interval = setInterval(updateTimeLeft, 1000);

    // Первоначальное обновление
    updateTimeLeft();

    // Очистка интервала
    return () => clearInterval(interval);
  }, [cycleDuration]);

  if (showLanding) {
    return <Main />;
  }

  return <CountdownTimerUI timeLeft={timeLeft} />;
};
