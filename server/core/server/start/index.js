const utils = require("../../utils/utils");
const mc = require("minecraft-protocol");
const dconf = require("../../../config");
const mcData = require("minecraft-data")(dconf.version)
const Method = require("../../../methods/index")
const core = require("../../core")
const config = require("../../utils/config/index")

module.exports = async () => {
    const startText = `
\x1B[38;2;73;243;112m
███╗░░░███╗██╗███╗░░██╗███████╗░░░░░██╗░██████╗
████╗░████║██║████╗░██║██╔════╝░░░░░██║██╔════╝
██╔████╔██║██║██╔██╗██║█████╗░░░░░░░██║╚█████╗░
██║╚██╔╝██║██║██║╚████║██╔══╝░░██╗░░██║░╚═══██╗
██║░╚═╝░██║██║██║░╚███║███████╗╚█████╔╝██████╔╝
╚═╝░░░░░╚═╝╚═╝╚═╝░░╚══╝╚══════╝░╚════╝░╚═════╝░
\x1b[0m\x1B[38;2;73;189;243m
By Prorickey
\x1b[0m`

    let lines = startText.split("\n");
    lines.forEach(line => {
        process.stdout.write(line + "\n")
    });

    let properties = await config.getall();

    const server = mc.createServer({
        'online-mode':true,
        encryption: true,
        host:properties.host,
        port:parseInt(properties.port),
        version:dconf.version,
        motd:properties.motd,
        maxPlayers: parseInt(properties.maxPlayers)
    });

    utils.logger.info("Server finished loading.")

    server['methods'] = Method(server, core)

    utils.file.getFiles("./core/server/events/server/").forEach(file => {
        let func = require("../../." + file)
        let name = file.split("/")
        name = name[name.length - 1].split('.')[0]
        server.on(name, func.bind(null, server, core))
    });

    return server;
}