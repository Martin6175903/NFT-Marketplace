const html = require("./html");
const scss = require("./scss");
const js = require("./js");
const img = require("./img");
const fonts = require("./fonts");
const watcher = () => {
    $.gulp.watch($.pathFile.html.watch, html).on("all", $.browserSync.reload);
    $.gulp.watch($.pathFile.scss.watch, scss).on("all", $.browserSync.reload);
    $.gulp.watch($.pathFile.js.watch, js).on("all", $.browserSync.reload);
    $.gulp.watch($.pathFile.img.watch, img).on("all", $.browserSync.reload);
    $.gulp.watch($.pathFile.fonts.watch, fonts).on("all", $.browserSync.reload);
}
