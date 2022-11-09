import { defineConfig } from "vituum";
import { resolve } from "path";
import { path } from "./gulp-settings";
import pug from "@vituum/pug";
import replace from "@rollup/plugin-replace";
import alias from "@rollup/plugin-alias";

export default defineConfig({
	root: resolve(process.cwd(), `${path.srcFolder}`),
	input: [
		resolve(process.cwd(), `${path.srcFolder}/views/**/*.pug.html`),
		resolve(process.cwd(), `${path.srcFolder}/emails/*.pug.html`),
		resolve(process.cwd(), `${path.src.styles}/*.{css,scss,sass}`),
		resolve(process.cwd(), `${path.src.scripts}/*.{js}`),
	],
	output: resolve(process.cwd(), `${path.buildFolder}`),
	middleware: {
		viewsDir: resolve(process.cwd(), `${path.srcFolder}/views`),
		viewsIgnored: '',
	},
	imports: {
		paths: [
			resolve(process.cwd(), `${path.src.styles}`),
			resolve(process.cwd(), `${path.src.scripts}`),
			resolve(process.cwd(), `${path.src.templates}`),
		],
		extnamePattern: {
			styles: /.(css|scss|sass)$/,
		},
	},
	build: {
		log: true,
		manifest: false,
		sourcemap: true,
	},
	templates: {
		format: "pug",
		formats: ["pug"],
	},
	integrations: [
		pug({
			reload: true,
			root: resolve(process.cwd(), `${path.src.templates}`),
			filters: {},
			data: "",
			globals: {
				isDev: 'isDev',
			},
			filetypes: {
				html: /.(json|json.html|pug.json|pug.json.html|pug|pug.html)$/,
				json: /.(json.pug.html)$/,
			},
			pug: {},
		}),
	],
	plugins: [
		replace({
			preventAssignment: true,
			include: [resolve(process.cwd(), `${path.srcFolder}/**/*.{js,pug.html,html,sass,scss,css}`)],
			values: {
				img: `${path.assetsFolder}/img`,
			},
		}),
		alias({
			entries: [
				{ find: "@styles", replacement: resolve(process.cwd(), `${path.src.styles}`) },
				{ find: "@scripts", replacement: resolve(process.cwd(), `${path.src.scripts}`) },
				{
					find: "@templates",
					replacement: resolve(process.cwd(), `${path.src.templates}`),
				},
				{ find: "@img", replacement: resolve(process.cwd(), `${path.assetsFolder}/img`) },
			],
		}),
	],
	vite: {
		server: {
			port: "8080",
		},
		css: {
			devSourcemap: true,
			preprocessorOptions: {
				sass: {
					warnRuleAsWarning: false,
				}
			}
		},
	},
});
