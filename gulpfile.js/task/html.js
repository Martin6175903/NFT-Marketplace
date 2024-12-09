// Обработка HTML

const html = {
    async index() {
        await $.gulp.src($.pathFile.html.index.src)
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError()
            }))
            .pipe($.gp.fileInclude())
            .pipe($.gp.size({ title: "До сжатия" }))
            .pipe($.gp.htmlmin($.appFile.htmlmin))
            .pipe($.gp.size({title: "После сжатия"}))
            .pipe($.gulp.dest($.pathFile.html.index.dest));
    },
    async signupHTML() {
        await $.gulp.src($.pathFile.html.signup.src)
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError()
            }))
            .pipe($.gp.rename({ basename: "signup" }))
            .pipe($.gp.fileInclude())
            .pipe($.gp.size({ title: "До сжатия" }))
            .pipe($.gp.htmlmin($.appFile.htmlmin))
            .pipe($.gp.size({title: "После сжатия"}))
            .pipe($.gulp.dest($.pathFile.html.signup.dest));
    }
}

module.exports = html;
