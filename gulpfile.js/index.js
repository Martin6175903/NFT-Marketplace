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
const {index: html, signupHTML, walletHTML, artistHTML, nftHTML, marketplaceHTML, rankingsHTML } = require("./task/html");
const {index: scss, signupSCSS, walletSCSS, artistSCSS, nftSCSS, marketplaceSCSS, rankingsSCSS } = require("./task/scss");
const {index: js, signupJS, walletJS, artistJS, nftJS, marketplaceJS, rankingsJS } = require("./task/js");
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
    $.gulp.watch($.pathFile.html.wallet.watch, walletHTML).on("all", $.browserSync.reload);
    $.gulp.watch($.pathFile.scss.wallet.watch, walletSCSS).on("all", $.browserSync.reload);
    $.gulp.watch($.pathFile.js.wallet.watch, walletJS).on("all", $.browserSync.reload);
    $.gulp.watch($.pathFile.html.marketplace.watch, marketplaceHTML).on("all", $.browserSync.reload);
    $.gulp.watch($.pathFile.scss.marketplace.watch, marketplaceSCSS).on("all", $.browserSync.reload);
    $.gulp.watch($.pathFile.js.marketplace.watch, marketplaceJS).on("all", $.browserSync.reload);
    $.gulp.watch($.pathFile.html.rankings.watch, rankingsHTML).on("all", $.browserSync.reload);
    $.gulp.watch($.pathFile.scss.rankings.watch, rankingsSCSS).on("all", $.browserSync.reload);
    $.gulp.watch($.pathFile.js.rankings.watch, rankingsJS).on("all", $.browserSync.reload);
    $.gulp.watch($.pathFile.img.watch, img).on("all", $.browserSync.reload);
    $.gulp.watch($.pathFile.fonts.watch, fonts).on("all", $.browserSync.reload);
}

// Build
const build = $.gulp.series(
    clear,
    $.gulp.parallel(html, signupHTML, walletHTML, marketplaceHTML, rankingsHTML, scss, signupSCSS, walletSCSS, marketplaceSCSS, rankingsSCSS, js, signupJS, walletJS, marketplaceJS, rankingsJS, img, fonts)
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

