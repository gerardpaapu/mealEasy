import request from 'superagent'

import { Weeks, WeeksId } from '../../../models/weeks'

const rootUrl = '/api/v1'

export async function getWeeksByUserId(userid: Weeks) {
  const weeks = await request.get(`${rootUrl}/weeks/user/${userid}`)
  return weeks.body as Weeks
}

export async function getWeeksById(id: WeeksId) {
  const week = await request.get(`${rootUrl}/weeks/${id}`)
  return week.body as Weeks
}

export async function addWeek(data: Weeks) {
  await request.post(`${rootUrl}/weeks`).send(data)
}

export async function updateWeek(data: WeeksId) {
  const id = data.id
  return await request.patch(`${rootUrl}/weeks/${id}`).send(data)
}
