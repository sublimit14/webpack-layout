const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: {
        main: './src/js/index.js', // Ваш основной JS файл
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js', // Выходной файл JS
        clean: true, // Очистка папки dist перед каждой сборкой
    },
    mode: isProduction ? 'production' : 'development', // Режим сборки (production или development)
    module: {
        rules: [
            {
                test: /\.scss$/, // Обработка SCSS файлов
                use: [
                    MiniCssExtractPlugin.loader, // Для development инлайним CSS
                    'css-loader', // Преобразует CSS в CommonJS
                    'sass-loader', // Компилирует SCSS в CSS
                ],
            },
            {
                test: /\.js$/, // Обработка JS файлов
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Используем Babel для транспиляции JS
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: "> 0.25%, not dead", // Поддержка современных браузеров
                                    useBuiltIns: 'usage', // Полифилы по мере необходимости
                                    corejs: 3, // Версия core-js
                                },
                            ],
                        ],
                    },
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].min.css', // Выходной файл CSS
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/images', to: 'images' },
                { from: 'index.html', to: 'index.html' }, // Копируем index.html в dist
                { from: 'favicon.ico', to: 'favicon.ico' },
            ],
        }),
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(), // Минификация CSS
            new TerserPlugin(), // Минификация JS
        ],
    },
    devtool: isProduction ? false : 'source-map', // Добавление sourcemap для development
    //watch: !isProduction, // Включаем watch режим только в development
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        hot: true,
        open: true, // Автоматически открывать браузер при запуске сервера
        liveReload: true, // Включает автоматическую перезагрузку страницы
        watchFiles: ['index.html', 'dist/**/*'], // Отслеживание изменений файлов для автоматической перезагрузки
    },
};