const mongoose = require("mongoose")

mongoose.Promise = global.Promise

const authorSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("Author", authorSchema)