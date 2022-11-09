# Gulp-Vituum - сборка Xpage

> Используется [Vite](https://vitejs.dev/), [Vituum](https://vituum.dev/) и [Gulp v4](https://gulpjs.com/)

## Начало работы
Установка npm зависимостей
```
npm i
```
Запуск в режиме разработчика
```
npm run dev
```


## Структура папок и файлов

```
├── .vscode/                      # Настройки VSCode
│   ├── snippets                  # сниппеты
├── assets/                       #
│   ├── fonts                     # шрифты
│   ├── img                       # папка для хранения картинок
│   │   ├── svg-sprite            # специальная папка для преобразования svg в спрайт
├── dist/                         # Собранный проект
├── config/                       # Настройки сборщика
│   ├── gulp-tasks                # Задачи gulp
│   └── accesses.js               # Доступы к серверу
│   └── gulp-settings.js          # Пути
│   └── gulp-plugins.js           # Общие плагины
│   └── vite.config.dev.js        # Vite конфиг для разработки
│   └── vite.config.build.js      # Vite конфиг для сборки
├── src/                          # Исходники
│   ├── js                        # Скрипты
│   │   ├── modules               # Модули
│   │   └── main.js               # Главный скрипт
│   ├── pug                       # Разметка
│   │   ├── blocks                # общие блоки
│   │   ├── pages                 # страницы
│   │   │   └── index.pug         # главная страница
│   │   ├── sections              # секции страниц
│   ├── sass                      # Стили сайта
│   │   └── main.scss             # Главный файл стилей
│   │   ├── base                  # базовые стили
│   │   │   ├── mixins            # Миксины
│   │   │   ├── form              # Стили форм (checkbox, input, ...)
│   │   │   └── _null.sass        # Файл для обнуление стилей браузера
│   │   │   └── _fonts.sass       # Файл для подключения шрифтов
│   │   │   └── _variables.sass   # Файл для написания css- или sass-переменных
│   │   │   └── _mixins.sass      # Файл для подключения миксинов из папки mixins
│   │   │   └── _form.sass        # Файл для подключения стилей из папки form
│   │   │   └── _animations.sass  # Файл анимаций
│   │   │   └── _common.sass      # Файл общих стилей
│   │   ├── blocks                # стили общих блоков
│   │   ├── pages                 # стили страниц
│   │   ├── sections              # стили секций
└── gulpfile.js                   # Gulp
└── package.json                  # файл с настройками сборки и установленными пакетами
└── .editorconfig                 # файл с настройками форматирования кода
└── .ecrc                         # файл с настройками пакета editorconfig-checker (исключает ненужные папки)
└── README.md                     # документация сборки
```

## Плагины для Vite, Vituum
1. [@vituum/pug](https://github.com/vituum/vite-plugin-pug)
2. [@rollup/plugin-alias](https://www.npmjs.com/package/@rollup/plugin-alias)
3. [@rollup/plugin-replace](https://www.npmjs.com/package/@rollup/plugin-replace)

## Плагины для Gulp
1. [gulp-fonter-fix](https://npm.io/package/gulp-fonter-fix)
2. [gulp-if](https://www.npmjs.com/package/gulp-if)
3. [gulp-newer](https://www.npmjs.com/package/gulp-newer)
4. [gulp-notify](https://www.npmjs.com/package/gulp-notify)
5. [gulp-plumber](https://www.npmjs.com/package/gulp-plumber)
6. [gulp-rename](https://www.npmjs.com/package/gulp-rename)
7. [gulp-sharp-responsive](https://www.npmjs.com/package/gulp-sharp-responsive)
8. [gulp-svg-sprite](https://www.npmjs.com/package/gulp-svg-sprite)
9. [gulp-ttf2woff](https://www.npmjs.com/package/gulp-ttf2woff)
10. [gulp-ttf2woff2](https://www.npmjs.com/package/gulp-ttf2woff2)

## Общие плагины
1. [del](https://www.npmjs.com/package/del)
