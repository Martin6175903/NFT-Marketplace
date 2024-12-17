// Обработка JavaScript

const js = []

for (const jsChunk in $.pathFile.js) {
    if (jsChunk === 'watch') continue;
    js.push(
        async function() {
            await $.gulp.src($.pathFile.js[jsChunk].src)
                .pipe($.gp.plumber({
                    errorHandler: $.gp.notify.onError()
                }))
                .pipe($.gp.babel())
                .pipe($.webpack({
                    mode: $.appFile.isDev ? "development" : "production"
                }))
                .pipe($.gp.if(jsChunk !== 'index', $.gp.rename({ basename: jsChunk })))
                .pipe($.gulp.dest($.pathFile.js[jsChunk].dest));
        }
    )
}

module.exports = js;
