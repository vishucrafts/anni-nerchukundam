import knex from '../KnexInstance'
import {getAuthorByBookId, getAuthorByName} from './Author'

async function getBooks() {
  return knex<Book>('books').select('*')
}

async function getBooksByAuthorId(authorId: number) {
  return knex<Book>('books').select('*').where('authorId', '=', authorId)
}

async function getBookByTitle(title: string) {
  return knex<Book>('books').first('*').where('title', '=', title)
}

async function addBook(bookInput: BookInput) {
  const author = await getAuthorByName(bookInput.author)
  if (!author) {
    throw new Error('No such author found')
  } else {
    await knex<Book>('books').insert({
      title: bookInput.title,
      authorId: author.id,
    })
    return getBookByTitle(bookInput.title)
  }
}

export {addBook, getBooks, getBooksByAuthorId}
