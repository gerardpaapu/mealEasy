import request from 'superagent'

import { UpdateWeek, Weeks, WeeksId } from '../../../models/weeks'

const rootUrl = '/api/v1'

export async function getWeeksByUserId(userid: string) {
  const weeks = await request.get(`${rootUrl}/weeks/user/${userid}`)
  return weeks.body as WeeksId[]
}

export async function getWeeksById(id: number) {
  const week = await request.get(`${rootUrl}/weeks/${id}`)
  return week.body as Weeks
}

export async function addWeek(data: Weeks) {
  await request.post(`${rootUrl}/weeks`).send(data)
}

export async function updateWeek(data: UpdateWeek) {
  const id = data.id
  return await request.patch(`${rootUrl}/weeks/${id}`).send(data)
}
