const mongoose = require("mongoose")
const Author = require("../model/author")

const authorController = {
    createAuthor: async (req) => {
        const author = new Author({
            id: mongoose.Types.ObjectId(),
            name: req.name,
            age: req.age,
        })

        return author.save()
            
    },

    getAuthors: async (req) => {
        return await Author.find().select('id name age')
    },

    getAuthor: async (req) => {
        return await Author.findOne({"id": req.id}).select('id name age')
    }
}

module.exports = authorController