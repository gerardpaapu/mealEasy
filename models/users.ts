export interface User {
  auth0_id: string | undefined
  email: string | undefined
  first_name: string | undefined
  last_name: string | undefined
  nickname: string | undefined
}

export interface UpdateUser {
  email?: string
  first__name?: string
  last_name?: string
  nickname?: string
}
