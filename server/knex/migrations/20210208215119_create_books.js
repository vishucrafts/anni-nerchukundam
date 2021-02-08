/**
 * @param {import('knex')} knex
 */
exports.up = function (knex) {
  return knex.schema.createTable('books', function (t) {
    t.string('title')
    t.integer('authorId').notNullable()
    t.foreign('authorId').references('id').inTable('authors')
  })
}

/**
 * @param {import('knex')} knex
 */
exports.down = function (knex) {
  return knex.schema.dropTable('books')
}
