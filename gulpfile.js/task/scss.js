// Обработка CSS

const scss = {
    async index() {
        await $.gulp.src($.pathFile.scss.index.src, { sourcemaps: $.appFile.isDev})
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError()
            }))
            .pipe($.gp.sassGlob())
            .pipe($.sass())
            .pipe($.gp.autoprefixer())
            .pipe($.gp.shorthand())
            .pipe($.gp.groupCssMediaQueries())
            .pipe($.gp.size({ title: "main.css"} ))
            .pipe($.gulp.dest($.pathFile.scss.index.dest, { sourcemaps: $.appFile.isDev }))
            .pipe($.gp.if($.appFile.isProd, $.gp.rename({ suffix: ".min"})))
            .pipe($.gp.if($.appFile.isProd, $.gp.csso()))
            .pipe($.gp.if($.appFile.isProd, $.gp.size({ title: "main.min.css"} )))
            .pipe($.gulp.dest($.pathFile.scss.index.dest));
    },
    async signupSCSS() {
        await $.gulp.src($.pathFile.scss.signup.src, { sourcemaps: $.appFile.isDev})
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError()
            }))
            .pipe($.gp.rename({ basename: "signup" }))
            .pipe($.gp.sassGlob())
            .pipe($.sass())
            .pipe($.gp.autoprefixer())
            .pipe($.gp.shorthand())
            .pipe($.gp.groupCssMediaQueries())
            .pipe($.gp.size({ title: "signup.css"} ))
            .pipe($.gulp.dest($.pathFile.scss.signup.dest, { sourcemaps: $.appFile.isDev }))
            .pipe($.gp.if($.appFile.isProd, $.gp.rename({ suffix: ".min"})))
            .pipe($.gp.if($.appFile.isProd, $.gp.csso()))
            .pipe($.gp.if($.appFile.isProd, $.gp.size({ title: "signup.min.css"} )))
            .pipe($.gulp.dest($.pathFile.scss.signup.dest));
    }
}

module.exports = scss;
