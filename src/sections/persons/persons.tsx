import { useRef, useState, type FC, type SyntheticEvent } from "react";

import { PersonsProvider } from "./persons-provider";
import { PersonsUI } from "../ui/persons";

import type { TPersonsContextValue } from "./types";

import type { TGroup, TPersonGroup } from "../../utils/types";

const groups: TPersonGroup[] = [
  {
    type: "subjects",
    persons: [
      {
        info: {
          main: "Михаил Прохоров",
          extra: "Виктор Долгий",
          position: "phenomen",
        },
        appearance: {
          size: "L",
          direction: "left",
          image:
            "https://storage.yandexcloud.net/otkter-bucket/phenomena/persons/dolgiy.png",
          decorated: true,
        },
      },
      {
        info: {
          main: "Антон Прохоров",
          extra: "Степан Петрухин",
          position: "regular",
        },
        appearance: {
          size: "S",
          direction: "left",
          image:
            "https://storage.yandexcloud.net/otkter-bucket/phenomena/persons/petruhin.png",
        },
      },
      {
        info: {
          main: "Евгений Иванов",
          extra: "Дмитрий Грошев",
          position: "phenomen",
        },
        appearance: {
          size: "L",
          direction: "left",
          image:
            "https://storage.yandexcloud.net/otkter-bucket/phenomena/persons/groshev.png",
        },
      },
      {
        info: {
          main: "Елена Ларичева",
          extra: "Полина Черкашина",
          position: "science",
        },
        appearance: {
          size: "M",
          direction: "right",
          image:
            "https://storage.yandexcloud.net/otkter-bucket/phenomena/persons/cherkashina.png",
          decorated: true,
        },
      },
      {
        info: {
          main: "Сергей Клягин",
          extra: "Александр Сальник",
          position: "phenomen",
        },
        appearance: {
          size: "L",
          direction: "right",
          image:
            "https://storage.yandexcloud.net/otkter-bucket/phenomena/persons/salnik.png",
          decorated: true,
        },
      },
      {
        info: {
          main: "Дежурная Люба",
          extra: "Валерия Прохорова",
          position: "regular",
        },
        appearance: {
          size: "S",
          direction: "right",
          image:
            "https://storage.yandexcloud.net/otkter-bucket/phenomena/persons/prohorova.png",
        },
      },
      {
        info: {
          main: "Авангард Дягилев",
          extra: "Марат Рудницкий",
          position: "science",
        },
        appearance: {
          size: "S",
          direction: "left",
          image:
            "https://storage.yandexcloud.net/otkter-bucket/phenomena/persons/rudnitskiy.png",
        },
      },
      {
        info: {
          main: "Олег Ларичев",
          extra: "Леонид Стрельников",
          position: "science",
        },
        appearance: {
          size: "M",
          direction: "right",
          image:
            "https://storage.yandexcloud.net/otkter-bucket/phenomena/persons/strelnikov.png",
        },
      },
      {
        info: {
          main: "Валентина Богина",
          extra: "Светлана Мочалова",
          position: "science",
        },
        appearance: {
          size: "M",
          direction: "right",
          image:
            "https://storage.yandexcloud.net/otkter-bucket/phenomena/persons/mochalova.png",
        },
      },
    ],
  },
  {
    type: "committee",
    persons: [
      {
        info: {
          main: "Сергей Яковлев ",
          extra:
            "Режиссёр-постановщик, автор идеи вертикального сериала «Журнал ИВН». Глава творческой экосистемы “Открытая Территория”",
        },
        appearance: {
          size: "M",
          // image:
          //   "https://storage.yandexcloud.net/otkter-bucket/phenomena/persons/groshev.png",
          direction: "right",
        },
      },
      {
        info: {
          main: "Анна Сорокваша ",
          extra: "Художник-постановщик. Перформер, художник",
        },
        appearance: {
          size: "M",
          direction: "left",
          // image:
          //   "https://storage.yandexcloud.net/otkter-bucket/phenomena/persons/groshev.png",
        },
      },
      {
        info: {
          main: "Евгений Скочин",
          extra: "Хореограф, актёр театра “Ленком Марка Захарова”",
        },
        appearance: {
          size: "M",
          // image:
          //   "https://storage.yandexcloud.net/otkter-bucket/phenomena/persons/groshev.png",
          direction: "left",
        },
      },
      {
        info: {
          main: "Владимир Правдин ",
          extra: "Композитор, артист ансамбля “Аракс”",
        },
        appearance: {
          size: "M",
          direction: "right",
          // image:
          //   "https://storage.yandexcloud.net/otkter-bucket/phenomena/persons/groshev.png",
        },
      },
      {
        info: {
          main: "Арсений Аспек",
          extra:
            "Дизайнер-айдентик, дизайнер интерфейсов. Арт-директор творческой экосистемы «Открытая Территория» и агентства «Открытый глаз»",
        },
        appearance: {
          size: "M",
          direction: "right",
          // image:
          //   "https://storage.yandexcloud.net/otkter-bucket/phenomena/persons/groshev.png",
        },
      },
      {
        info: {
          main: "Алёна Синельникова",
          extra:
            "Автор идеи вертикального сериала «Журнал ИВН», специалист по продвижению. Директор по связям с общественностью творческой экосистемы «Открытая Территория»",
        },
        appearance: {
          size: "M",
          direction: "left",
          // image:
          //   "https://storage.yandexcloud.net/otkter-bucket/phenomena/persons/groshev.png",
        },
      },
      {
        info: {
          main: "Артём Хрусталёв",
          extra:
            "Технический директор творческой экосистемы «Открытая Территория»",
        },
        appearance: {
          size: "M",
          direction: "left",
          // image:
          //   "https://storage.yandexcloud.net/otkter-bucket/phenomena/persons/groshev.png",
        },
      },
      {
        info: {
          main: "Анастасия Авраменко",
          extra:
            "Режиссёр вертикального сериала «Журнал ИВН». Творец экосистемы «Открытая Территория»",
        },
        appearance: {
          size: "M",
          direction: "right",
          // image:
          //   "https://storage.yandexcloud.net/otkter-bucket/phenomena/persons/groshev.png",
        },
      },
      {
        info: {
          main: "Леонид Стрельников ",
          extra:
            "Сценарист вертикального сериала «Журнал ИВН». Актёр театра «У Никитских ворот» и творческой экосистемы «Открытая Территория»",
        },
        appearance: {
          size: "M",
          direction: "right",
          // image:
          //   "https://storage.yandexcloud.net/otkter-bucket/phenomena/persons/groshev.png",
        },
      },
    ],
  },
];

const tabs: TGroup[] = ["subjects", "committee"];

export const Persons: FC = () => {
  const [currentTab, setCurrentTab] = useState<TGroup>("subjects");
  const groupsRef = useRef<HTMLUListElement>(null);

  const handleChange = (tab: TGroup, index: number) => {
    setCurrentTab(tab);
    if (groupsRef.current)
      groupsRef.current.scrollTo({
        left: window.innerWidth * index,
        behavior: "smooth",
      });
  };

  const handleScroll = (e: SyntheticEvent) => {
    const tabIndex = Math.round(e.currentTarget.scrollLeft / window.innerWidth);
    setCurrentTab(tabs[tabIndex]);
  };

  const contextValue: TPersonsContextValue = {
    groups,
    tabs,
    currentTab,
    groupsRef,
    handleChange,
    handleScroll,
  };

  return (
    <PersonsProvider value={contextValue}>
      <PersonsUI />
    </PersonsProvider>
  );
};
