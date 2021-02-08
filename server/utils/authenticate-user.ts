import knex from '../db/KnexInstance'

async function getUser(user: User) {
  const rows: Pick<User, 'id'>[] = await knex<User>('users')
    .select('id')
    .where({
      username: user.username,
      password: user.password,
    })

  if (rows.length > 0) {
    return rows[0].id
  } else {
    return 0
  }
}

export {getUser}
