import knex from '../KnexInstance'

/**
 * Fetches author by book id from database
 * @param bookId
 */
async function getAuthorByBookId(bookId: number) {
  const allAuthors = await knex<Author>('authors').select('id', 'name')
  const author = allAuthors.find(author => author.id === bookId)
  return author
}

async function getAuthors() {
  return knex<Author>('authors').select('*')
}

async function getAuthorByName(name: string) {
  return knex<Author>('authors').first('*').where('name', '=', name)
}

export {getAuthorByBookId, getAuthorByName, getAuthors}
