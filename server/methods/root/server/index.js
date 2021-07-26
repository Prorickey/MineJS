module.exports = (srv, core) => {
    return {
        broadcast:function broadcast(message) {

            message = message.replace(/&a/g, "§a").replace(/&b/g, "§b").replace(/&c/g, "§c").replace(/&d/g, "§d").replace(/&e/g, "§e").replace(/&f/g, "§f")
            message = message.replace(/&0/g, "§0").replace(/&1/g, "§1").replace(/&2/g, "§2").replace(/&3/g, "§3").replace(/&4/g, "§4").replace(/&5/g, "§5").replace(/&6/g, "§6").replace(/&7/g, "§7").replace(/&8/g, "§8").replace(/&9/g, "§9")
            message = message.replace(/&k/g, "§k").replace(/&l/g, "§l").replace(/&m/g, "§m").replace(/&n/g, "§n").replace(/&o/g, "§o").replace(/&r/g, "§r")

            var msg = {
                translate:"chat.type.text",
                text:message
            };

            for(var key in srv.clients) {
                srv.clients[key].write("chat", { message:JSON.stringify(msg), position: 0, sender: '0' })
            }

        }
    }
}