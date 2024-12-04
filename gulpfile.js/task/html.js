// Обработка HTML
const html = async () => {
    await $.gulp.src($.pathFile.html.src)
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError()
        }))
        .pipe($.gp.fileInclude())
        .pipe($.gp.size({ title: "До сжатия" }))
        .pipe($.gp.htmlmin($.appFile.htmlmin))
        .pipe($.gp.size({title: "После сжатия"}))
        .pipe($.gulp.dest($.pathFile.html.dest));
}

module.exports = html;
