const utils = require("../../../../utils/utils")

module.exports = (server, client, core, packet) => {
    if(!packet['message']) return;
    server.methods.server.broadcast(client.username + ": " + packet.message)
    utils.logger.info("PLAYERCHATMESSAGE: " + client.username + ": " + packet.message)
}