import knex from '../KnexInstance'

async function getUserByPassword(user: User) {
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

export {getUserByPassword}
