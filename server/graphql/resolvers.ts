import {IResolvers} from 'apollo-server-express'

import {getAuthorByBookId, getAuthors} from '../db/controllers/Author'
import {addBook, getBooks, getBooksByAuthorId} from '../db/controllers/Book'

const resolvers: IResolvers = {
  Query: {
    async books() {
      return getBooks()
    },
    async authors() {
      return getAuthors()
    },
  },
  Book: {
    async author(book: Book) {
      return getAuthorByBookId(book.authorId)
    },
  },
  Author: {
    async books(author: Author) {
      return getBooksByAuthorId(author.id)
    },
  },

  Mutation: {
    async addBook(_, {book}: {book: BookInput}) {
      return addBook(book)
    },
  },
}

export default resolvers
