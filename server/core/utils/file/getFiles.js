const { readdirSync } = require("fs");

module.exports = (path) => {
    return getFiles(path)
    function getFiles(path) {
        let commands = [];
        readdirSync(path).forEach(a => {
            if(a.endsWith('.js')) {
                commands.push(path + a)
            } else {
                getFiles(`${path}${a}/`).forEach(a => commands.push(a))//.forEach(b => commands.push(`${path}${a}/${b}`))
            }
        })
        return commands;
    }
}