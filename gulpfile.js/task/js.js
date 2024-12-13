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
    },
    async walletJS() {
        await $.gulp.src($.pathFile.js.wallet.src)
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError()
            }))
            .pipe($.gp.babel())
            .pipe($.webpack({
                mode: $.appFile.isDev ? "development" : "production"
            }))
            .pipe($.gp.rename({ basename: "wallet" }))
            .pipe($.gulp.dest($.pathFile.js.wallet.dest));
    },
    async artistJS() {
        await $.gulp.src($.pathFile.js.artist.src)
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError()
            }))
            .pipe($.gp.babel())
            .pipe($.webpack({
                mode: $.appFile.isDev ? "development" : "production"
            }))
            .pipe($.gp.rename({ basename: "artist" }))
            .pipe($.gulp.dest($.pathFile.js.artist.dest));
    },
    async nftJS() {
        await $.gulp.src($.pathFile.js.nft.src)
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError()
            }))
            .pipe($.gp.babel())
            .pipe($.webpack({
                mode: $.appFile.isDev ? "development" : "production"
            }))
            .pipe($.gp.rename({ basename: "nft" }))
            .pipe($.gulp.dest($.pathFile.js.nft.dest));
    },
    async marketplaceJS() {
        await $.gulp.src($.pathFile.js.marketplace.src)
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError()
            }))
            .pipe($.gp.babel())
            .pipe($.webpack({
                mode: $.appFile.isDev ? "development" : "production"
            }))
            .pipe($.gp.rename({ basename: "marketplace" }))
            .pipe($.gulp.dest($.pathFile.js.marketplace.dest));
    },
    async rankingsJS() {
        await $.gulp.src($.pathFile.js.rankings.src)
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError()
            }))
            .pipe($.gp.babel())
            .pipe($.webpack({
                mode: $.appFile.isDev ? "development" : "production"
            }))
            .pipe($.gp.rename({ basename: "rankings" }))
            .pipe($.gulp.dest($.pathFile.js.rankings.dest));
    }
}

module.exports = js;
