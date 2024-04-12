export interface User {
  auth0_id: string
  email: string
  first__name: string
  last_name: string
  nickname: string
}

export interface UpdateUser {
  email?: string
  first__name?: string
  last_name?: string
  nickname?: string
}
