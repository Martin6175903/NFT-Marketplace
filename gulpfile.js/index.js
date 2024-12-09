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
const {index: html, signupHTML } = require("./task/html");
const {index: scss, signupSCSS } = require("./task/scss");
const {index: js, signupJS } = require("./task/js");
const fonts = require("./task/fonts");
const img = require("./task/img");
const server = require("./task/server");
const clear = require("./task/clear");

const watcher = () => {
    $.gulp.watch($.pathFile.html.index.watch, html).on("all", $.browserSync.reload);
    $.gulp.watch($.pathFile.scss.index.watch, scss).on("all", $.browserSync.reload);
    $.gulp.watch($.pathFile.js.index.watch, js).on("all", $.browserSync.reload);
    $.gulp.watch($.pathFile.html.signup.watch, signupHTML).on("all", $.browserSync.reload);
    $.gulp.watch($.pathFile.scss.signup.watch, signupSCSS).on("all", $.browserSync.reload);
    $.gulp.watch($.pathFile.js.signup.watch, signupJS).on("all", $.browserSync.reload);
    $.gulp.watch($.pathFile.img.watch, img).on("all", $.browserSync.reload);
    $.gulp.watch($.pathFile.fonts.watch, fonts).on("all", $.browserSync.reload);
}

// Build
const build = $.gulp.series(
    clear,
    $.gulp.parallel(html, signupHTML, scss, signupSCSS, js, signupJS, img, fonts)
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

