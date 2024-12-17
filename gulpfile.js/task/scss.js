// Обработка CSS

const scss = []

for (const scssChunk in $.pathFile.scss) {
    if (scssChunk === 'watch') continue;
    scss.push(
        async function() {
            await $.gulp.src($.pathFile.scss[scssChunk].src, {sourcemaps: $.appFile.isDev})
                .pipe($.gp.plumber({
                    errorHandler: $.gp.notify.onError()
                }))
                .pipe(
                    $.gp.if(
                        scssChunk !== 'index',
                        $.gp.rename({basename: scssChunk})
                    ))
                .pipe($.gp.sassGlob())
                .pipe($.sass())
                .pipe($.gp.autoprefixer())
                .pipe($.gp.shorthand())
                .pipe($.gp.groupCssMediaQueries())
                .pipe($.gp.size(
                    {
                        title: `${scssChunk !== "index" ? scssChunk : "main"}.css`
                    }
                ))
                .pipe($.gulp.dest($.pathFile.scss[scssChunk].dest, {sourcemaps: $.appFile.isDev}))
                .pipe($.gp.if($.appFile.isProd, $.gp.rename({suffix: ".min"})))
                .pipe($.gp.if($.appFile.isProd, $.gp.csso()))
                .pipe($.gp.if($.appFile.isProd, $.gp.size({
                    title: `${scssChunk !== "index" ? scssChunk : "main"}.min.css`}
                )))
                .pipe($.gulp.dest($.pathFile.scss[scssChunk].dest));
        }
    )
}

module.exports = scss;
