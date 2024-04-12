import connection from '../connection'

const db = connection

//Get Preferences

export async function getPreferences() {
  const preferences = await db('preferences').select()
  return preferences
}

export async function getUserPreferences(userId: string) {
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
