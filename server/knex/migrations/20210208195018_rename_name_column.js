/**
 * @param {import('knex')} knex
 */
exports.up = function (knex) {
  return knex.schema.alterTable('users', function (t) {
    t.renameColumn('name', 'username')
  })
}

/**
 * @param {import('knex')} knex
 */
exports.down = function (knex) {
  return knex.schema.alterTable('users', function (t) {
    t.renameColumn('username', 'name')
  })
}
