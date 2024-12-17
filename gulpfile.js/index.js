global.$ = {
    gulp: require("gulp"),
    gp: require("gulp-load-plugins")(),
    sass: require('gulp-sass')(require('sass')),
    browserSync: require('browser-sync').create(),
    // Plugins
    del: require("del"),
    webpack: require("webpack-stream"),
    // Configuration
    appFile: require("./config/app"),
    pathFile: require("./config/path")
}

// Tasks
const [...arrHtml] = require("./task/html");
const [...arrSCSS] = require("./task/scss");
const [...arrJS] = require("./task/js");
const fonts = require("./task/fonts");
const img = require("./task/img");
const server = require("./task/server");
const clear = require("./task/clear");

const watcher = () => {
    $.gulp.watch($.pathFile.html.watch, $.gulp.parallel(arrHtml)).on("all", $.browserSync.reload);
    $.gulp.watch($.pathFile.scss.watch, $.gulp.parallel(arrSCSS)).on("all", $.browserSync.reload);
    $.gulp.watch($.pathFile.js.watch, $.gulp.parallel(arrJS)).on("all", $.browserSync.reload);
    $.gulp.watch($.pathFile.img.watch, img).on("all", $.browserSync.reload);
    $.gulp.watch($.pathFile.fonts.watch, fonts).on("all", $.browserSync.reload);
}

// Build
const build = $.gulp.series(
    clear,
    $.gulp.parallel(arrHtml, arrSCSS, arrJS, img, fonts)
);

// Dev
const dev = $.gulp.series(
    build,
    $.gulp.parallel(watcher, server)
);

// Сборка
exports.default = $.appFile.isProd
    ? build
    : dev;

