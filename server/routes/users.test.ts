import * as db from '../db/CRUD/user'
import { vi, describe, it, expect } from 'vitest'
import request from 'supertest'
import server from '../server'

vi.mock('../db/CRUD/user')

describe('GET /apo/v1/user', () => {
  it('should return 200 with an object', async () => {
    const fakeUser = {
      auth0_id: 'auth0|648fd1c873375442becf2c60',
      email: 'katie@example.com',
      nickname: 'katie',
      first_name: 'Katie',
      last_name: 'Davies',
    }

    vi.mocked(db.getUserById).mockResolvedValue(fakeUser)
    const response = await request(server).get(
      '/api/v1/users/auth0|648fd1c873375442becf2c60',
    )

    expect(response.statusCode).toBe(200)
    expect(response.body).toStrictEqual(fakeUser)
  })
})
