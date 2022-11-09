import { configFTP } from "../gulp-settings.js";
import vinylFTP from "vinyl-ftp";

export const ftp = () => {
	let destTask
	let connection
	if (app.isFTPHtml) {
		connection = vinylFTP.create(configFTP.html);
		destTask = connection.dest(`/${app.path.ftp.html}`)
	} else if (app.isFTPServer) {
		connection = vinylFTP.create(configFTP.server);
		destTask = connection.dest(`/${app.path.ftp.server}`)
	}
	return app.gulp
		.src(`${app.path.buildFolder}/**/*.*`, {})
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "FTP",
					message: "Error: <%= error.message %>",
				})
			)
		)
		.pipe(destTask)
};
