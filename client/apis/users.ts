import request from 'superagent'
import { User } from '../../models/users'

const rootUrl = '/api/v1'

export async function getUserById(id: string) {
  const user = await request.get(`${rootUrl}/users/${id}`)
  console.log(user)
  return user.body as User
}
