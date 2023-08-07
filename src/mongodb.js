const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://amanullahkhan91929:mastermind20056@cluster0.dye3r4u.mongodb.net/?retryWrites=true&w=majority")

    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log("failed to connect");
    })

const LogInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
    type: String,
    required: true
    }
})


const collection = new mongoose.model("Collection1",LogInSchema)

module.exports = collection

