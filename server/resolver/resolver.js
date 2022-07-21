const {books} = require("../data/static")

const resolvers = {
    Query: {
        books: () => books
    }

}

module.exports = resolvers