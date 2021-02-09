import {gql} from 'apollo-server-express'

const typeDefs = gql`
  # Comments in graphql

  type Book {
    id: Int
    title: String
    author: Author
  }

  type Author {
    id: Int
    name: String
    books: [Book]
  }

  type Query {
    books: [Book]
    authors: [Author]
  }

  type Mutation {
    addBook(book: BookInput): Book
  }

  input BookInput {
    title: String
    author: String
  }
`

export default typeDefs
