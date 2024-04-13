import request from 'superagent'
import { Preferences } from '../../../models/preferences'

const rootUrl = '/api/v1'

export async function getPreferences() {
  const preferences = await request.get(`${rootUrl}/preferences`)

  return preferences.body as Preferences[]
}
