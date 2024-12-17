// Обработка HTML

const html = []

for (const htmlChunk in $.pathFile.html) {
    if (htmlChunk === 'watch' || htmlChunk === 'chunk') continue;
    html.push(
        async function() {
            await $.gulp.src($.pathFile.html[htmlChunk].src)
                .pipe($.gp.plumber({
                    errorHandler: $.gp.notify.onError()
                }))
                .pipe($.gp.if(htmlChunk !== 'index', $.gp.rename({ basename: htmlChunk })))
                .pipe($.gp.rename({ basename: htmlChunk }))
                .pipe($.gp.fileInclude())
                .pipe($.gp.size({ title: "До сжатия" }))
                .pipe($.gp.htmlmin($.appFile.htmlmin))
                .pipe($.gp.size({title: "После сжатия"}))
                .pipe($.gulp.dest($.pathFile.html[htmlChunk].dest))
        }
    )
}

module.exports = html;
