/**
 * @param {import('knex')} knex
 */
exports.up = function (knex) {
  return knex.schema.createTable('authors', function (t) {
    t.increments()
    t.string('name')
  })
}

/**
 * @param {import('knex')} knex
 */
exports.down = function (knex) {
  return knex.schema.dropTable('authors')
}
