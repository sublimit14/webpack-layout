## 1. Основные возможности

**1. Поддержка JavaScript (ES6+)**

Используется Babel для транспиляции современного JavaScript в код, совместимый с большинством браузеров.

**2. Обработка SCSS**

SCSS файлы компилируются в CSS с автоматическим добавлением вендорных префиксов и минификацией.

**3. Минификация CSS и JS**

В production-режиме CSS и JavaScript минифицируются для уменьшения размера файлов.

**4. Копирование статических файлов**

HTML, favicon и другие статические файлы автоматически копируются в папку сборки.

**5. Режим разработки**

Встроенный DevServer с горячей перезагрузкой (HMR) и автоматическим открытием браузера.

## 2. Структура проекта

```
.
├── README.md
├── dist
│   ├── css
│   │   ├── main.min.css
│   │   └── main.min.css.map
│   ├── favicon.ico
│   ├── images
│   │   ├── cats.jpg
│   │   └── shield.png
│   ├── index.html
│   └── js
│       ├── main.bundle.js
│       └── main.bundle.js.map
├── favicon.ico
├── index.html
├── node_modules
│   ├── @babel
│   │   ├── core -> ../.pnpm/@babel+core@7.26.9/node_modules/@babel/core
│   │   └── preset-env -> ../.pnpm/@babel+preset-env@7.26.9_@babel+core@7.26.9/node_modules/@babel/preset-env
│   ├── babel-loader -> .pnpm/babel-loader@9.2.1_@babel+core@7.26.9_webpack@5.98.0/node_modules/babel-loader
│   ├── copy-webpack-plugin -> .pnpm/copy-webpack-plugin@12.0.2_webpack@5.98.0/node_modules/copy-webpack-plugin
│   ├── css-loader -> .pnpm/css-loader@7.1.2_webpack@5.98.0/node_modules/css-loader
│   ├── css-minimizer-webpack-plugin -> .pnpm/css-minimizer-webpack-plugin@7.0.0_webpack@5.98.0/node_modules/css-minimizer-webpack-plugin
│   ├── mini-css-extract-plugin -> .pnpm/mini-css-extract-plugin@2.9.2_webpack@5.98.0/node_modules/mini-css-extract-plugin
│   ├── normalize.css -> .pnpm/normalize.css@8.0.1/node_modules/normalize.css
│   ├── sass -> .pnpm/sass@1.85.0/node_modules/sass
│   ├── sass-loader -> .pnpm/sass-loader@16.0.5_sass@1.85.0_webpack@5.98.0/node_modules/sass-loader
│   ├── style-loader -> .pnpm/style-loader@4.0.0_webpack@5.98.0/node_modules/style-loader
│   ├── terser-webpack-plugin -> .pnpm/terser-webpack-plugin@5.3.11_webpack@5.98.0/node_modules/terser-webpack-plugin
│   ├── webpack -> .pnpm/webpack@5.98.0_webpack-cli@6.0.1/node_modules/webpack
│   ├── webpack-cli -> .pnpm/webpack-cli@6.0.1_webpack-dev-server@5.2.0_webpack@5.98.0/node_modules/webpack-cli
│   └── webpack-dev-server -> .pnpm/webpack-dev-server@5.2.0_webpack-cli@6.0.1_webpack@5.98.0/node_modules/webpack-dev-server
├── package.json
├── pnpm-lock.yaml
├── src
│   ├── images
│   │   ├── cats.jpg
│   │   └── shield.png
│   ├── js
│   │   └── index.js
│   └── scss
│       ├── _global.scss
│       ├── _variables.scss
│       ├── layout
│       │   ├── _footer.scss
│       │   └── _header.scss
│       ├── main
│       │   └── _hero.scss
│       └── style.scss
└── webpack.config.js
```

## 3. Первый запуск

3.1. Установить Node.js v22 или выше
```
node -v
```
3.2. Перейти в папку с проектом (чтобы в корне был доступен package.json)
```bash
cd my-project-folder
```
3.3. Установить зависимости
```bash
npm install
```
3.4. Запуск сервера для разработки
```bash
npm start
```