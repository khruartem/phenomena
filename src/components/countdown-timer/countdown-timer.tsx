import { useState, useEffect, type FC } from "react";
import { Main } from "../main";
import { CountdownTimerUI } from "../ui/countdown-timer";

export const CountdownTimer: FC = () => {
  const cycleDuration = 48 * 60 * 60 * 1000; // Полный цикл (48 часов в миллисекундах)

  const [timeLeft, setTimeLeft] = useState(""); // Оставшееся время для отображения
  const [showLanding, setShowLanding] = useState(false); // Флаг показа лэндинга

  useEffect(() => {
    // Фиксируем дату старта (например, конкретный момент времени)
    const globalStartDate = new Date("2026-02-13T21:12:00Z"); // ISO формат

    const updateTimeLeft = () => {
      const now = new Date(); // Текущее глобальное время
      const elapsed = +now - +globalStartDate; // Время, прошедшее с момента старта (в миллисекундах)
      const normalizedElapsed = elapsed % cycleDuration; // Нормализуем в пределах 48 часов

      // Определяем оставшееся время для текущего направления
      const halfCycle = cycleDuration / 2; // Длительность половины цикла (24 часа в миллисекундах)
      let remainingTimeMs;
      if (normalizedElapsed >= halfCycle) {
        remainingTimeMs = cycleDuration - normalizedElapsed; // Обратный отсчет
      } else {
        remainingTimeMs = halfCycle - normalizedElapsed; // Отсчет вверх до 24 часов
      }

      // Вычисляем часы, минуты и секунды из миллисекунд
      const hours = Math.floor(remainingTimeMs / (60 * 60 * 1000));
      const minutes = Math.floor(
        (remainingTimeMs % (60 * 60 * 1000)) / (60 * 1000),
      );
      const seconds = Math.floor((remainingTimeMs % (60 * 1000)) / 1000);

      // Форматируем результат как HH:MM:SS
      setTimeLeft(
        `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`,
      );

      // Показываем лэндинг, если полный цикл завершен
      if (elapsed >= cycleDuration) {
        setShowLanding(true);
      }
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
