const fs = require("fs");
const path = require("path");

module.exports = {
    getall: async () => {
        let config = fs.readFileSync(path.resolve("../config.properties")).toString().split("\n")
        let values = []
        config.forEach(data => {
            if(!data.startsWith("#") && !data.startsWith("\r")) {
                values.push(data.replace("\r", ""))
            }
        });

        let final = {}
        values.forEach(data => {
            data = data.split(":")

            let value = ""
            for(i = 0; i < data[1].length; i++) {
                if(data[1].charAt(i) != "#") {
                    value += data[1].charAt(i);
                } else {
                    break;
                }
            }

            final[data[0].trim()] = value.trim();

        });

        return final;
    }
}