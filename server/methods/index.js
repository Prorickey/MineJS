module.exports = (srv, core) => {
    return {
        getServer:function getServer() {
            return srv;
        },

        server:require("./root/server/index")(srv, core)
    }

}