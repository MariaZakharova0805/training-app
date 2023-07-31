# Monster Training app
<a href="https://training-sigma.vercel.app/" target="_blank">![Project illustartion](https://github.com/MariaZakharova0805/training-app/raw/main/screenshot.jpg)</a>
Приложение для тренировок

## Деплой
<a href="https://training-sigma.vercel.app/" target="_blank">www.monster-training.app</a>

## Технологии
- TS
- React
- Redux
- MUI
- LovalStorage
- JS
- CSS

### Особенности проекта
- Одностраничное приложение (SPA)
- Отзывчивый дизайн Mobile First 
- Методология Feature-Sliced Design

### Функционал приложения
- Предоставляет план тренировки (силовая, кариод, растяжка)
- Отслеживает график изменения веса, объемов талии, бедер и бицепсов
- Отслеживает количество непрерывных дней тренировки
- Предоставляет информацию по режиму питания и отдыха во время тренировок
- Мотивирует пользователя заниматься спортом не реже чем раз в 2 дня
- Таймер для отслеживания продолжительности текущей тренировки
- Плеер с подборкой музыки для тренировок (плейлист составлен создателем приложения)
- Мотивирует пользователя заниматься каждый день и достигать спортивные результаты

### Работа с приложением
- При первичном открытии приложения, пользователю открывается информационное окно, где он может ознакомиться с правилами пользования приложение, а - также с политикой конфиденциальности. Пользователь заполняет свои данные (имя, вес, аватар)
- При последующих открытий приложения, на странице уже отображаются данные пользователя: имя, текущий вес, баллы за тренировки
- Пользователь имеет возможность засечь продолжительность своей тренировки на главной странице, нажав кнопки “старт” и “стоп”
- Пользователь может вносить информацию о своем весе и объемах теле в разделе “Динамика”
- Пользователь может сменить текущее имя и аватар на странице “Настройки”
- Пользователь может удалить все свои данные(без возможности восстановления), нажав на кнопку “удалить” в левой навигационной панели

###  Дальнейшие планы по развитию приложения
- При первичном открытии страницы, дать пользователю выбор нескольких вариантов тренировок: “набор массы”, “похудение”, “йога”
- Добавить окошко с выбором усиленности тренировок, чтобы приложение могло подбирать тренировки, согласно физическим рекомендациям

### Установка и использование
NodeJS v8+ is required to install and run the project.

```sh
$ npm i
$ npm run dev
$ npm run build
```

## Зависимости
   - @emotion/react
   - @emotion/styled
   - @mui/icons-material
   - @mui/material
   - @types/react-router-dom
   - @types/react-redux
   - @types/react-router
   - nanoid
   - react-dom
   - react-lazy-load-image-component
   - react-redux
   - react-router
   - react-router-dom
   - redux
   - redux-thunk