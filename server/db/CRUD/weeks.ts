import { UpdateWeek, Weeks, WeeksId } from '../../../models/weeks'
import connection from '../connection'

const db = connection

//add Recipe by post request
export async function addWeek(data: Weeks) {
  await db('weeks').insert(data)
}

export async function getWeekById(id: number): Promise<WeeksId> {
  const week = await db('weeks').where({ id }).select().first()
  return week
}

export async function getWeeksByUserId(userId: string): Promise<WeeksId[]> {
  const weeks = await db('weeks').where('user_id', userId).select()
  return weeks
}

export async function updateWeekById(id: number, data: UpdateWeek) {
  await db('weeks').where({ id }).update(data)
}
