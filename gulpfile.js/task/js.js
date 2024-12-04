// Обработка JavaScript
const js = async () => {
    await $.gulp.src($.pathFile.js.src)
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError()
        }))
        .pipe($.gp.babel())
        .pipe($.webpack({
            mode: $.appFile.isDev ? "development" : "production"
        }))
        .pipe($.gulp.dest($.pathFile.js.dest));
}

module.exports = js;
