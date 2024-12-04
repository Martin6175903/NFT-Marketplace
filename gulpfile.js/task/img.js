// Обработка Images
const img = async () => {
    await $.gulp.src($.pathFile.img.src, {encoding: false})
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError()
        }))
        // .pipe($.gp.newer($.pathFile.img.dest))
        // .pipe($.gp.imagemin($.appFile.imagemin))
        .pipe($.gulp.dest($.pathFile.img.dest));
}

module.exports = img;
