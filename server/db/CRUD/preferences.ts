import connection from '../connection'
import { Preferences } from '../../../models/preferences'
import {
  AllUserPreferences,
  UserPreferences,
} from '../../../models/userPreferences'

const db = connection

//Get Preferences

export async function getPreferences(): Promise<Preferences[]> {
  const preferences = await db('preferences').select()
  return preferences
}

export async function getUserPreferences(
  userId: string,
): Promise<AllUserPreferences[]> {
  const UserPreferences = await db('preferences')
    .join(
      'user_preferences',
      'Preferences.id',
      'user_preferences.preference_id',
    )
    .join('users', 'user_preferences.user_id', 'users.auth0_id')
    .where('users.auth0_id', userId)
    .select('id', 'name', 'type', 'user_id', 'preference_id')
  return UserPreferences
}

export async function addUserPreferences(data: UserPreferences) {
  await db('user_preferences').insert(data)
}
export async function delPreferences(userId: string) {
  await db('user_preferences').where('user_id', userId).delete()
}
