import request from 'superagent'
import { Preferences } from '../../../models/preferences'
import { UserPreferences } from '../../../models/userPreferences'

const rootUrl = '/api/v1'

export async function getPreferences() {
  const preferences = await request.get(`${rootUrl}/preferences`)

  return preferences.body as Preferences[]
}

export async function addUserPreferences(data: UserPreferences) {
  await request.post(`${rootUrl}/preferences`).send(data)
}
