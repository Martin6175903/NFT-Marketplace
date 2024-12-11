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
    },
    async walletHTML() {
        await $.gulp.src($.pathFile.html.wallet.src)
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError()
            }))
            .pipe($.gp.rename({ basename: "wallet" }))
            .pipe($.gp.fileInclude())
            .pipe($.gp.size({ title: "До сжатия" }))
            .pipe($.gp.htmlmin($.appFile.htmlmin))
            .pipe($.gp.size({title: "После сжатия"}))
            .pipe($.gulp.dest($.pathFile.html.wallet.dest));
    },
    async artistHTML() {
        await $.gulp.src($.pathFile.html.artist.src)
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError()
            }))
            .pipe($.gp.rename({ basename: "artist" }))
            .pipe($.gp.fileInclude())
            .pipe($.gp.size({ title: "До сжатия" }))
            .pipe($.gp.htmlmin($.appFile.htmlmin))
            .pipe($.gp.size({title: "После сжатия"}))
            .pipe($.gulp.dest($.pathFile.html.artist.dest));
    }
}

module.exports = html;
