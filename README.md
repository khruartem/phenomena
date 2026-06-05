# Феномены

> **Лэндинг спецпроекта "Феномены"** — веб-приложение Института внедрения навыков (ИВН)

[![Vercel Deployment](https://img.shields.io/badge/deployed%20on-Vercel-000?style=flat-square&logo=vercel)](https://phenomena-lake.vercel.app)
[![TypeScript](https://img.shields.io/badge/TypeScript-82.9%-3178C6?style=flat-square&logo=typescript)](package.json)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](package.json)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite)](package.json)

[🌐 Посетить сайт](https://phenomena-lake.vercel.app) • [📦 Исходный код](#структура-проекта) • [🚀 Начало-работы](#быстрый-старт)

---

## О проекте

Это современный лэндинг для инновационного проекта "Феномены", разработанный командой Института внедрения навыков. Сайт демонстрирует возможности и цели проекта с использованием современных веб-технологий и лучших практик фронтенд-разработки.

### ✨ Ключевые особенности

- 🎨 **Современный UI/UX дизайн** — отзывчивый интерфейс с плавными анимациями
- ⚡ **Высокая производительность** — построен на Vite с оптимизацией для быстрой загрузки
- 📱 **Полностью адаптивный** — отлично работает на всех устройствах
- 🎭 **Анимации и интерактивность** — использует Framer Motion для плавных переходов
- 🛣️ **Навигация** — интеллектуальная маршрутизация с React Router
- ♿ **Доступность** — заботимся о юзабилити для всех пользователей

---

## Стек технологий

| Слой | Технология |
|------|-----------|
| **Фреймворк** | React 19 |
| **Язык** | TypeScript |
| **Сборка** | Vite |
| **Маршрутизация** | React Router v7 |
| **Анимации** | Framer Motion |
| **Стили** | CSS + Clsx |
| **Утилиты** | React Intersection Observer, React Responsive |
| **Развёртывание** | Vercel |

### Композиция кода

- TypeScript: 82.9%
- CSS: 15.6%
- HTML: 1.1%
- JavaScript: 0.4%

---

## 🚀 Быстрый старт

### Требования

- Node.js 18+
- npm или yarn

### Установка

1. Клонируйте репозиторий: `git clone https://github.com/khruartem/phenomena.git && cd phenomena`
2. Установите зависимости: `npm install`
3. Запустите локальный сервер: `npm run dev` (приложение откроется на http://localhost:5173)

### Команды разработки

- `npm run dev` — разработка с горячей перезагрузкой
- `npm run lint` — проверка кода на ошибки
- `npm run build` — сборка для продакшена
- `npm run build:production` — сборка для продакшена (опция)
- `npm run build:test` — сборка для тестирования
- `npm run preview` — предпросмотр собранного приложения

---

## 📁 Структура проекта

phenomena/ ├── src/ │   ├── components/ — переиспользуемые компоненты │   ├── pages/ — страницы приложения │   ├── styles/ — глобальные стили │   ├── types/ — TypeScript типы │   ├── utils/ — утилиты и хелперы │   ├── App.tsx — главный компонент │   └── main.tsx — точка входа ├── public/ — статические ресурсы ├── package.json — зависимости и скрипты ├── tsconfig.json — конфигурация TypeScript ├── vite.config.ts — конфигурация Vite └── README.md — этот файл

---

## 🌐 Развёртывание

Проект автоматически развёртывается на **Vercel** при каждом push в ветку `main`. Live версия доступна по адресу: https://phenomena-lake.vercel.app

---

## 📝 Лицензия

Этот проект создан Институтом внедрения навыков (ИВН).

---

## 👨‍💻 Разработчик

Проект разработан и поддерживается [@khruartem](https://github.com/khruartem)

---

## 📞 Связь

Для вопросов и предложений обратитесь к организатору проекта через GitHub Issues.

---

**Создано с ❤️ для Феноменов**