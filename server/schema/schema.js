const {gql} = require("apollo-server-express")

const typeDefs = gql`
    type Book {
        id: ID
        name: String
        kind: String
    }

    # Root Type
    type Query {
        books: [Book]
    }
`

module.exports = typeDefs