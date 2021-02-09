import {IResolvers} from 'apollo-server-express'

import {
  findAuthorsByName,
  getAuthorByBookId,
  getAuthors,
} from '../db/controllers/Author'
import {
  addBook,
  findBooksByTitle,
  getBooks,
  getBooksByAuthorId,
} from '../db/controllers/Book'
import {dateScalar} from './scalars/Date'

const resolvers: IResolvers = {
  Date: dateScalar,
  Result: {
    __resolveType(obj: Result) {
      if ('title' in obj) {
        return 'Book'
      } else {
        return 'Author'
      }
    },
  },
  Query: {
    async search(_, {contains}: {contains: string}): Promise<Result[]> {
      const books = await findBooksByTitle(contains)
      const authors = await findAuthorsByName(contains)

      const result: Result[] = []
      return result.concat(books).concat(authors)
    },
    async books(): Promise<Book[]> {
      return getBooks()
    },
    async authors(): Promise<Author[]> {
      return getAuthors()
    },
    async favoriteColor(): Promise<AllowedColor> {
      return 'BLUE'
    },
    async avatar(
      _,
      {borderColor}: {borderColor: AllowedColor},
    ): Promise<string> {
      return borderColor
    },
    async getDate(_, {timeStamp}: {timeStamp: number}): Promise<Date> {
      const date = new Date(timeStamp)
      return date
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
    async addBook(_, {book}: {book: BookInput}): Promise<AddBookResponse> {
      return {
        code: 201,
        message: 'Book added successfully',
        success: true,
        book: await addBook(book),
      }
    },
  },
}

export default resolvers
