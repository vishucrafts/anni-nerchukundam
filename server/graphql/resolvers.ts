import {IResolvers} from 'apollo-server-express'

import {getAuthorByBookId, getAuthors} from '../db/controllers/Author'
import {getBooks, getBooksByAuthorId} from '../db/controllers/Book'
import knex from '../db/KnexInstance'

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
}

export default resolvers
