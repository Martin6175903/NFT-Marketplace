
// Обработка Fonts
const fonts = async () => {
    await $.gulp.src($.pathFile.fonts.src, {encoding: false})
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError()
        }))
        .pipe($.gp.newer($.pathFile.fonts.dest))
        .pipe($.gulp.dest($.pathFile.fonts.dest))
        .pipe($.gp.ttf2woff2())
        .pipe($.gulp.dest($.pathFile.fonts.dest));
}

module.exports = fonts;
