const utils = require("./utils/utils");

module.exports = {

    info:utils.logger.info,
    warn:utils.logger.warn,
    error:utils.logger.error,
    config:utils.config,

    server:require("./server/index")

}