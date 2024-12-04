// Обработка CSS
const scss = async () => {
    await $.gulp.src($.pathFile.scss.src, { sourcemaps: $.appFile.isDev})
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError()
        }))
        .pipe($.gp.sassGlob())
        .pipe($.sass())
        .pipe($.gp.autoprefixer())
        .pipe($.gp.shorthand())
        .pipe($.gp.groupCssMediaQueries())
        .pipe($.gp.size({ title: "main.css"} ))
        .pipe($.gulp.dest($.pathFile.scss.dest, { sourcemaps: $.appFile.isDev }))
        .pipe($.gp.if($.appFile.isProd, $.gp.rename({ suffix: ".min"})))
        .pipe($.gp.if($.appFile.isProd, $.gp.csso()))
        .pipe($.gp.if($.appFile.isProd, $.gp.size({ title: "main.min.css"} )))
        .pipe($.gulp.dest($.pathFile.scss.dest));
}

module.exports = scss;
