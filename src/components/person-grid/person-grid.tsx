import type { FC } from "react";

import { PersonGridUI } from "../ui/person-grid";

import type { TPerson } from "../../utils/types";

export const PersonGrid: FC = () => {
  const persons: TPerson[] = [
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
  ];

  return <PersonGridUI persons={persons} />;
};
