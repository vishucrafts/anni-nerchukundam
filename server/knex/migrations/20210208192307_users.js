/**
 * @param {import('knex')} knex
 */
exports.up = function (knex) {
  return knex.schema.createTable('users', function (t) {
    t.increments()
    t.string('name')
    t.string('password')
  })
}

/**
 * @param {import('knex')} knex
 */
exports.down = function (knex) {
  return knex.schema.dropSchemaIfExists('users')
}
