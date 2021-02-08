/**
 * @param {import('knex')} knex
 */
exports.up = function (knex) {
  return knex.schema.alterTable('books', function (t) {
    t.increments('id').primary()
  })
}

/**
 * @param {import('knex')} knex
 */
exports.down = function (knex) {
  return knex.schema.table('books', function (t) {
    t.dropColumn('id')
  })
}
