module.exports = {
    info: async (data) => {
        process.stdout.write("\x1B[38;2;140;140;140mINFO \x1b[0m" + data + "\n")
    },

    warn: async (data) => {
        process.stdout.write("\x1B[38;2;255;243;64mWARN \x1b[0m" + data + "\n")
    },

    error: async (data) => {
        process.stdout.write("\x1B[38;2;203;0;0mERROR \x1b[0m" + data + "\n")
    }
}