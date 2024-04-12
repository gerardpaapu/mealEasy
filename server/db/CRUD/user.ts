import connection from '../connection'

const db = connection

//add User by post request
export async function addUsers(data) {
  await db('users').insert(data)
}

//Get user By Id

export async function getUserById(id: string) {
  const user = await db('users').where('auth0_id', id).select().first()
  return user
}

//Update user by Id

export async function updateUserById(id: string, data) {
  await db('users').where('auth0_id', id).update(data)
}
