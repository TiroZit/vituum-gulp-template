import path from "path";
import sharpResponsive from "gulp-sharp-responsive";

export const images = () => {
	return app.gulp
		.src(app.path.src.images)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "IMAGES",
					message: "Error: <%= error.message %>",
				})
			)
		)
		.pipe(app.plugins.newer(app.path.build.images))
		.pipe(
			app.plugins.if(
				app.isWebP,
				sharpResponsive({
					formats: [{
						format: "jpeg",
						jpegOptions: {
							quality: 80,
						},
					},
					{
						format: "png",
						pngOptions: {
							quality: 100,
						},
					},
					{
						format: "webp",
						webpOptions: {
							quality: 80,
						},
					},
					{
						format: "avif",
						avifOptions: {
							quality: 50,
						},
					}]
				})
			)
		)
		.pipe(app.plugins.if(app.isWebP, app.gulp.dest(app.path.build.images)))
		.pipe(app.gulp.src(app.path.src.svg))
		.pipe(app.gulp.dest(app.path.build.images));
};
