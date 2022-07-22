const mongoose = require("mongoose")
const Book = require("../model/book")

const bookController = {
    createBook: async (req) => {
        const book = new Book({
            id: mongoose.Types.ObjectId(),
            name: req.name,
            kind: req.kind,
            authorId: req.authorId,
        })
    
        return book.save()
            
    },

    getBooks: async (req) => {
        let query = {}
        if (typeof (req.authorId) != 'undefined') {
            query = {"authorId": req.authorId}
        }
        return await Book.find(query).select('id name kind authorId')
    },

    getBook: async (req) => {
        return await Book.findOne({"id": req.id}).select('id name kind authorId')
    }
}

module.exports = bookController