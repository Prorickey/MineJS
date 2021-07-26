const core = require("./core/core");

async function run() {
    core.info("Starting Server...")
    let server = core.server.start()
}

run()