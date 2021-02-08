import knex from '../KnexInstance'

async function getBooks() {
  return knex<Book>('books').select('*')
}

async function getBooksByAuthorId(authorId: number) {
  return knex<Book>('books').select('*').where('authorId', '=', authorId)
}

export {getBooks, getBooksByAuthorId}
