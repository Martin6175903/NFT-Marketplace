const pathSrc = './src';
const pathDest = "./public";

module.exports = {
    root: pathDest,

    html: {
        watch: pathSrc + "/html/**/*.html",
        index: {
            src: pathSrc + "/html/main-page/*.html",
            dest: pathDest
        },
        signup: {
            src: pathSrc + "/html/signup-page/*.html",
            dest: pathDest + "/html"
        },
        wallet: {
            src: pathSrc + "/html/wallet-page/*.html",
            dest: pathDest + "/html"
        },
        artist: {
            src: pathSrc + "/html/artist-page/*.html",
            dest: pathDest + "/html"
        },
        nft: {
            src: pathSrc + "/html/nft-page/*.html",
            dest: pathDest + "/html"
        },
        marketplace: {
            src: pathSrc + "/html/marketplace/*.html",
            dest: pathDest + "/html"
        },
        rankings: {
            src: pathSrc + "/html/rankings/*.html",
            dest: pathDest + "/html"
        }
    },

    scss: {
        watch: pathSrc + "scss/**/*.{sass,scss}",
        index: {
            src: pathSrc + "/scss/main-page/*.{sass,scss}",
            dest: pathDest + "/css"
        },
        signup: {
            src: pathSrc + "/scss/signup-page/*.{sass,scss}",
            dest: pathDest + "/css"
        },
        wallet: {
            src: pathSrc + "/scss/wallet-page/*.{sass,scss}",
            dest: pathDest + "/css"
        },
        artist: {
            src: pathSrc + "/scss/artist-page/*.{sass,scss}",
            dest: pathDest + "/css"
        },
        nft: {
            src: pathSrc + "/scss/nft-page/*.{sass,scss}",
            dest: pathDest + "/css"
        },
        marketplace: {
            src: pathSrc + "/scss/marketplace/*.{sass,scss}",
            dest: pathDest + "/css"
        },
        rankings: {
            src: pathSrc + "/scss/rankings/*.{sass,scss}",
            dest: pathDest + "/css"
        }
    },

    js: {
        watch: pathSrc + "/js/**/*.js",
        index: {
            src: pathSrc + "/js/main-page/*.js",
            dest: pathDest + "/js"
        },
        signup: {
            src: pathSrc + "/js/signup-page/*.js",
            dest: pathDest + "/js"
        },
        wallet: {
            src: pathSrc + "/js/wallet-page/*.js",
            dest: pathDest + "/js"
        },
        artist: {
            src: pathSrc + "/js/artist-page/*.js",
            dest: pathDest + "/js"
        },
        nft: {
            src: pathSrc + "/js/nft-page/*.js",
            dest: pathDest + "/js"
        },
        marketplace: {
            src: pathSrc + "/js/marketplace/*.js",
            dest: pathDest + "/js"
        },
        rankings: {
            src: pathSrc + "/js/rankings/*.js",
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
