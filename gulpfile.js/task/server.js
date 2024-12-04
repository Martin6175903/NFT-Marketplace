// Сервер
const server = async () => {
    await $.browserSync.init({
        server: {
            baseDir: $.pathFile.root
        }
    })
}

module.exports = server;
