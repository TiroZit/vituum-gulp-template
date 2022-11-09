// Импорт основного модуля
import gulp from "gulp";
// Импорт общих плагинов
import { plugins } from "./config/gulp-plugins.js";
// Импорт путей
import { path } from "./config/gulp-settings.js";

// Передаем значения в глобальную переменную
global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	isWebP: !process.argv.includes('--nowebp'),
	isFTPHtml: process.argv.includes('--ftpHtml'),
	isFTPServer: process.argv.includes('--ftpServer'),
	isFontsReW: process.argv.includes('--rewrite'),
	gulp: gulp,
	path: path,
	plugins: plugins
}

// Импорт задач
import { reset } from "./config/gulp-tasks/reset.js";
import { images } from "./config/gulp-tasks/images.js";
import { sprite } from "./config/gulp-tasks/sprite.js";
import { gitignore } from "./config/gulp-tasks/gitignore.js";
import { otfToTtf, ttfToWoff, fonstStyle } from "./config/gulp-tasks/fonts.js";
import { ftp } from "./config/gulp-tasks/ftp.js";
//import { gitPages } from "./config/gulp-tasks/git-pages.js";

// Последовательная обработака шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fonstStyle);
// Основные задачи будем выполнять параллельно после обработки шрифтов
const devTasks = gulp.parallel(fonts, gitignore);
// // Основные задачи будем выполнять параллельно после обработки шрифтов
const buildTasks = gulp.series(reset, fonts, gulp.parallel(images, gitignore));
//
// // Экспорт задач
export { fonts }
export { sprite }
export { ftp }
// export { gitPages }

// Построение сценариев выполнения задач
const development = gulp.series(devTasks);
const build = gulp.series(buildTasks);
const deployFTP = gulp.series(buildTasks, ftp);
// const deployGH = gulp.series(buildTasks, gitPages);

// Экспорт сценариев
export { development }
export { build }
export { deployFTP }
// export { deployGH }

// Выполнение сценария по умолчанию
gulp.task('default', development);
