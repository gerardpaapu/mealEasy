export interface Weeks {
  user_id: string
  monday: number
  tuesday: number
  wednesday: number
  thursday: number
  friday: number
  saturday: number
  sunday: number
  created_on: number
}

export interface WeeksId extends Weeks {
  id: number
}
