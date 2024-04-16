import request from 'superagent'
import { User } from '../../../models/users'

const rootUrl = '/api/v1'

export async function getUserById(id: string) {
  const res = await request.get(`${rootUrl}/users/${id}`)
  return res.body as User
}

export async function addUser(data: User) {
  await request.post(`${rootUrl}/users/`).send(data)
}

export async function updateUser(data: User) {
  const id = data.auth0_id
  return await request.patch(`${rootUrl}/users/${id}`).send(data)
}
