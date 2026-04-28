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
          character: "Михаил Прохоров",
          actor: "Виктор Долгий",
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
          character: "Антон Прохоров",
          actor: "Степан Петрухин",
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
          character: "Олег Ларичев",
          actor: "Леонид Стрельников",
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
          character: "Евгений Иванов",
          actor: "Дмитрий Грошев",
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
          character: "Авангард Дягилев",
          actor: "Марат Рудницкий",
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
          character: "Елена Ларичева",
          actor: "Полина Черкашина",
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
          character: "Сергей Клягин",
          actor: "Александр Сальник",
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
          character: "Дежурная Люба",
          actor: "Валерия Прохорова",
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
          character: "Валентина Богина",
          actor: "Светлана Мочалова",
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
          character: "Михаил Прохоров",
          actor: "Виктор Долгий",
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
          character: "Антон Прохоров",
          actor: "Степан Петрухин",
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
          character: "Олег Ларичев",
          actor: "Леонид Стрельников",
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
          character: "Евгений Иванов",
          actor: "Дмитрий Грошев",
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
          character: "Авангард Дягилев",
          actor: "Марат Рудницкий",
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
          character: "Елена Ларичева",
          actor: "Полина Черкашина",
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
          character: "Сергей Клягин",
          actor: "Александр Сальник",
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
          character: "Дежурная Люба",
          actor: "Валерия Прохорова",
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
          character: "Валентина Богина",
          actor: "Светлана Мочалова",
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

  const setTab = (tab: TGroup) => {
    setCurrentTab(tab);
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
    setTab,
  };

  return (
    <PersonsProvider value={contextValue}>
      <PersonsUI />
    </PersonsProvider>
  );
};
