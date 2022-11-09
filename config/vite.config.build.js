import { defineConfig } from "vituum";
import { resolve } from "path";
import { path } from "./gulp-settings";
import pug from "@vituum/pug";
import replace from "@rollup/plugin-replace";
import alias from "@rollup/plugin-alias";
import autoprefixer from "autoprefixer";

export default defineConfig({
	root: resolve(process.cwd(), `${path.srcFolder}`),
	output: resolve(process.cwd(), `${path.buildFolder}`),
	middleware: {
		viewsDir: resolve(process.cwd(), `${path.srcFolder}/views`),
		viewsIgnored: "",
	},
	imports: {
		paths: [
			resolve(process.cwd(), `${path.src.styles}/**.*`),
			resolve(process.cwd(), `${path.src.scripts}/**.*`),
			resolve(process.cwd(), `${path.src.templates}/**.*`),
		],
		extnamePattern: {
			styles: /.(css|scss|sass)$/,
			scripts: /.(js|mjs|ts)$/,
		},
		filenamePattern: {
			"+.css": resolve(process.cwd(), `${path.src.styles}`),
			"+.js": resolve(process.cwd(), `${path.src.scripts}`),
		},
	},
	build: {
		log: true,
		manifest: false,
	},
	templates: {
		format: "pug",
		formats: ["pug"],
	},
	integrations: [
		pug({
			root: resolve(process.cwd(), `${path.src.templates}`),
			filters: {},
			data: "",
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
			include: [
				resolve(process.cwd(), `${path.srcFolder}/**/*.{sass,scss,css}`),
			],
			values: {
				img: `../img`,
			},
			delimiters: ["@", ""],
		}),
		alias({
			entries: [
				{
					find: "@styles",
					replacement: resolve(process.cwd(), `${path.src.styles}`),
				},
				{
					find: "@scripts",
					replacement: resolve(process.cwd(), `${path.src.scripts}`),
				},
				{
					find: "@templates",
					replacement: resolve(process.cwd(), `${path.src.templates}`),
				},
				{
					find: "@img",
					replacement: resolve(process.cwd(), `${path.assetsFolder}/img`),
				},
			],
		}),
	],
	vite: {
		css: {
			postcss: {
				plugins: [autoprefixer],
			},
		},
		build: {
			emptyOutDir: false,
			polyfillModulePreload: false,
			rollupOptions: {
				output: {
					chunkFileNames: "js/[name]-[hash].js",
					entryFileNames: "js/[name]-[hash].js",
					assetFileNames: ({ name }) => {
						if (/\.css$/.test(name ?? "")) {
							return "styles/[name].[hash][extname]";
						}
						return "assets/[name].[hash][extname]";
					},
				},
			},
		},
	},
});
