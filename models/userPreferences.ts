export interface UserPreferences {
  user_id: string
  preference_id: string
}

export interface AllUserPreferences extends UserPreferences {
  id: number
  name: string
  type: string
}
