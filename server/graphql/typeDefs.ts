import {gql} from 'apollo-server-express'

const typeDefs = gql`
  # Comments in graphql

  scalar Date

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

  union Result = Book | Author

  type Query {
    """
    Returns all books
    Supports **multi-line** description for your [API](http://example.com)!
    """
    books: [Book]
    authors: [Author]
    favoriteColor: AllowedColor
    avatar(borderColor: AllowedColor): String
    search(contains: String): [Result]
    getDate(timeStamp: Date): Date
  }

  interface MutationResponse {
    code: Int!
    success: Boolean!
    message: String!
  }

  type AddBookResponse implements MutationResponse {
    code: Int!
    success: Boolean!
    message: String!
    book: Book
  }

  type Mutation {
    addBook(book: BookInput): AddBookResponse
  }

  input BookInput {
    title: String
    author: String
  }

  enum AllowedColor {
    RED
    GREEN
    BLUE
  }
`

export default typeDefs
