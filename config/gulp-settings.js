// Получаем имя папки проекта
import * as nodePath from "path";
import util from "gulp-util";
const rootFolder = nodePath.basename(nodePath.resolve());

// Пути к папке с исходниками и папке с результатом
const buildFolder = `./dist`;
const srcFolder = `./src`;
const assetsFolder = `${srcFolder}/assets`;

// Пути к папкам и файлам проекта
export const path = {
	build: {
		html: `${buildFolder}/`,
		js: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/files/`,
	},
	src: {
		templates: `${srcFolder}/templates`,
		scripts: `${srcFolder}/scripts`,
		styles: `${srcFolder}/styles`,
		images: `${assetsFolder}/img/**/*.{jpg,jpeg,png,gif,webp,avif}`,
		svg: `${assetsFolder}/img/**/*.svg`,
		svgicons: `${assetsFolder}/svg-sprite/*.svg`,
	},
	assets: {
		images: `${assetsFolder}/img/**/*.{jpg,jpeg,png,gif,webp,avif}`,
		fonts: `${assetsFolder}/fonts/*.*`,
		files: `${assetsFolder}/files/**/*.*`,
		svgicons: `${assetsFolder}/svg-sprite/*.svg`,
	},
	// Путь к нужной папке на удаленном сервере. gulp добавит имя папки проекта автоматически
	ftp: {
		html: `${rootFolder}`,
		server: ``,
	},

	clean: buildFolder,
	buildFolder: buildFolder,
	rootFolder: rootFolder,
	srcFolder: srcFolder,
	assetsFolder: assetsFolder,
};

// Настройка FTP соединения
export const configFTP = {
	html: {
		host: "", // Адрес FTP сервера
		user: "", // Имя пользователя
		password: "", // Пароль
		parallel: 10, // Кол-во одновременных потоков
		log: util.log,
	},
	server: {
		host: "", // Адрес FTP сервера
		user: "", // Имя пользователя
		password: "", // Пароль
		parallel: 5, // Кол-во одновременных потоков
		log: util.log,
	},
};
