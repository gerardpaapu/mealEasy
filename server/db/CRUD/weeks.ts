import connection from '../connection'

const db = connection

//add Recipe by post request
export async function addWeek(data) {
  await db('weeks').insert(data)
}

export async function getWeekById(id: number) {
  const week = await db('weeks').where({ id }).select()
  return week
}

export async function getWeeksByUserId(userId: string) {
  const weeks = await db('weeks').where('user_id', userId).select()
  return weeks
}

export async function updateWeekById(id: number, data) {
  await db('weeks').where({ id }).update(data)
}
