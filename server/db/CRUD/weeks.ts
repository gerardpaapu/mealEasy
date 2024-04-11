import connection from '../connection'

const db = connection

//add Recipe by post request
export async function addWeek(data) {
  await db('weeks').insert(data)
}

export async function getWeeksByUserId(userId: number) {
  const weeks = await db('weeks').where('user_id', userId).select()
  return weeks
}
