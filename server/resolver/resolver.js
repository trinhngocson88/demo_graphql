const {books, authors} = require("../data/static")

const resolvers = {
    Query: {
        books  : (parent, args, context) => context.bookController.getBooks(args),
        book   : (parent, args, context) => context.bookController.getBook({"id": args.id}),
        authors: (parent, args, context) => context.authorController.getAuthors(args),
        author : (parent, args, context) => context.authorController.getAuthor({"id": args.id}),
    },

    Book: {
        author: (parent, args, context) => context.authorController.getAuthor({"id": parent.authorId})
    },

    Author: {
        books: (parent, args, context) => context.bookController.getBooks({"authorId": parent.id}),
    },

    // Mutaion
    Mutation: {
        createBook: (parent, args, context) => {
            context.bookController.createBook(args)
        },
        createAuthor: (parent, args, context) => {
            context.authorController.createAuthor(args)
        }
    }

}

module.exports = resolvers