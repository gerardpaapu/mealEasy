export interface UserPreferences {
  user_id: string | undefined
  preference_id: number
}

export interface AllUserPreferences extends UserPreferences {
  id: number
  name: string
  type: string
}
