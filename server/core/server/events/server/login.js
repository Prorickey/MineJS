const utils = require("../../../utils/utils");
const dconf = require("../../../../config");
const mcData = require("minecraft-data")(dconf.version)
const world = require("../../world/index");

module.exports = (server, core, client) => {
    let loginPacket = mcData.loginPacket
      
    client.write('login', {
        entityId: client.id,
        isHardcore: false,
        gameMode: 0,
        previousGameMode: 255,
        worldNames: loginPacket.worldNames,
        dimensionCodec: loginPacket.dimensionCodec,
        dimension: loginPacket.dimension,
        worldName: 'minecraft:overworld',
        hashedSeed: [0, 0],
        maxPlayers: server.maxPlayers,
        viewDistance: 10,
        reducedDebugInfo: false,
        enableRespawnScreen: true,
        isDebug: false,
        isFlat: false
    });

    client.write('position', {
        x: 0,
        y: 1.62,
        z: 0,
        yaw: 0,
        pitch: 0,
        flags: 0x00
    });

    utils.file.getFiles("./core/server/events/client/").forEach(file => {
        let func = require("../../../." + file)
        let name = file.split("/")
        name = name[name.length - 1].split('.')[0]
        client.on(name, func.bind(null, server, client, core))
    });

    utils.logger.info("PLAYERCONNECT: " + client.username + " connected. UUID: " + client.uuid)

    server.methods.server.broadcast("&8[&a+&8] &e" + client.username)

    world(client)
}