// Удаление директории

const clear = async () => {
    await $.del($.pathFile.root);
}

module.exports = clear;
