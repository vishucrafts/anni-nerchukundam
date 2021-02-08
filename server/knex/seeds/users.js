/**
 * @param {import("knex").Config} knex
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'Vishal', password: '123'},
        {name: 'Bhargava', password: 'abc'},
      ])
    })
}
