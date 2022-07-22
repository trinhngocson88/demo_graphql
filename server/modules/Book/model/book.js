const mongoose = require("mongoose")

mongoose.Promise = global.Promise

const bookSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    kind: {
        type: String,
        required: false
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

module.exports = mongoose.model("Book", bookSchema)