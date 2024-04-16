import * as db from '../db/CRUD/weeks'
import { vi, describe, it, expect } from 'vitest'
import request from 'supertest'
import server from '../server'

vi.mock('../db/CRUD/weeks')

describe('GET /api/v1/weeks', () => {
  it('should return 200 with an object', async () => {
    const fakeWeek = {
      id: 1,
      user_id: 'auth0|6478f3fd75374ee3d7bc4d94',
      monday: 5,
      tuesday: 2,
      wednesday: 4,
      thursday: 3,
      friday: 7,
      saturday: 6,
      sunday: 1,
      created_on: 1712810143,
    }

    vi.mocked(db.getWeekById).mockResolvedValue(fakeWeek)
    const response = await request(server).get('/api/v1/weeks/1')

    expect(response.statusCode).toBe(200)
    expect(response.body).toStrictEqual(fakeWeek)
  })
})
