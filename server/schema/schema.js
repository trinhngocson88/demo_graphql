const {gql} = require("apollo-server-express")

const typeDefs = gql`
    type Book {
        id: ID
        name: String
        kind: String
        author: Author
    }

    type Author {
        id: ID
        name: String
        age: Int
        books: [Book]
    }

    # Root Type
    type Query {
        books(name: String): [Book]
        book(id: ID): Book
        authors: [Author]
        author(id: ID): Author
    }

    type Mutation {
        createBook(name: String, kind: String, authorId: ID!): Book
        createAuthor(name: String, age: String): Author
    }
`

module.exports = typeDefs