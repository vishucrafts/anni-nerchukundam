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
`

export default typeDefs
