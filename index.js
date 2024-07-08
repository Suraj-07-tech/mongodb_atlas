const mongoose = require("mongoose");

(async () => {

    try {
        await mongoose.connect("mongodb+srv://mongo:mongo123@cluster0.cynp1me.mongodb.net/FirstAtlas");
        console.log("Connection Successful");
    } catch (error) {
        console.log("Connection Failed");
    }
})();