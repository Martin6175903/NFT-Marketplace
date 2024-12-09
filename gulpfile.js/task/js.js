// Обработка JavaScript

const js = {
    async index() {
        await $.gulp.src($.pathFile.js.index.src)
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError()
            }))
            .pipe($.gp.babel())
            .pipe($.webpack({
                mode: $.appFile.isDev ? "development" : "production"
            }))
            .pipe($.gulp.dest($.pathFile.js.index.dest));
    },
    async signupJS() {
        await $.gulp.src($.pathFile.js.signup.src)
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError()
            }))
            .pipe($.gp.babel())
            .pipe($.webpack({
                mode: $.appFile.isDev ? "development" : "production"
            }))
            .pipe($.gp.rename({ basename: "signup" }))
            .pipe($.gulp.dest($.pathFile.js.signup.dest));
    }
}

module.exports = js;
