const pathSrc = './src';
const pathDest = "./public";

module.exports = {
    root: pathDest,

    html: {
        index: {
            src: pathSrc + "/html/main-page/*.html",
            watch: [
                pathSrc + "/html/chunk/**/*.html",
                pathSrc + "/html/main-page/**/*.html"
            ],
            dest: pathDest
        },
        signup: {
            src: pathSrc + "/html/signup-page/*.html",
            watch: pathSrc + "/html/signup-page/**/*.html",
            dest: pathDest + "/html"
        },
        wallet: {
            src: pathSrc + "/html/wallet-page/*.html",
            watch: pathSrc + "/html/wallet-page/**/*.html",
            dest: pathDest + "/html"
        },
        artist: {
            src: pathSrc + "/html/artist-page/*.html",
            watch: pathSrc + "/html/artist-page/**/*.html",
            dest: pathDest + "/html"
        },
        nft: {
            src: pathSrc + "/html/nft-page/*.html",
            watch: pathSrc + "/html/nft-page/**/*.html",
            dest: pathDest + "/html"
        }
    },

    css: {
        src: pathSrc + "/css/*.css",
        watch: pathSrc + "/css/**/*.css",
        dest: pathDest + "/css"
    },

    scss: {
        index: {
            src: pathSrc + "/scss/main-page/*.{sass,scss}",
            watch: [
                pathSrc + "/scss/block/**/*.{sass,scss}",
                pathSrc + "/scss/main-page/**/*.{sass,scss}"
            ],
            dest: pathDest + "/css"
        },
        signup: {
            src: pathSrc + "/scss/signup-page/*.{sass,scss}",
            watch: pathSrc + "/scss/signup-page/**/*.{sass,scss}",
            dest: pathDest + "/css"
        },
        wallet: {
            src: pathSrc + "/scss/wallet-page/*.{sass,scss}",
            watch: pathSrc + "/scss/wallet-page/**/*.{sass,scss}",
            dest: pathDest + "/css"
        },
        artist: {
            src: pathSrc + "/scss/artist-page/*.{sass,scss}",
            watch: pathSrc + "/scss/artist-page/**/*.{sass,scss}",
            dest: pathDest + "/css"
        },
        nft: {
            src: pathSrc + "/scss/nft-page/*.{sass,scss}",
            watch: pathSrc + "/scss/nft-page/**/*.{sass,scss}",
            dest: pathDest + "/css"
        }
    },

    js: {
        index: {
            src: pathSrc + "/js/main-page/*.js",
            watch: pathSrc + "/js/main-page/**/*.js",
            dest: pathDest + "/js"
        },
        signup: {
            src: pathSrc + "/js/signup-page/*.js",
            watch: pathSrc + "/js/signup-page/**/*.js",
            dest: pathDest + "/js"
        },
        wallet: {
            src: pathSrc + "/js/wallet-page/*.js",
            watch: pathSrc + "/js/wallet-page/**/*.js",
            dest: pathDest + "/js"
        },
        artist: {
            src: pathSrc + "/js/artist-page/*.js",
            watch: pathSrc + "/js/artist-page/**/*.js",
            dest: pathDest + "/js"
        },
        nft: {
            src: pathSrc + "/js/nft-page/*.js",
            watch: pathSrc + "/js/nft-page/**/*.js",
            dest: pathDest + "/js"
        }
    },

    img: {
        src: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg}",
        watch: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg}",
        dest: pathDest + "/img"
    },

    fonts: {
        src: pathSrc + "/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
        watch: pathSrc + "/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
        dest: pathDest + "/fonts"
    }
}
