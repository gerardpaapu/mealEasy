import { useAuth0 } from '@auth0/auth0-react'
import { addUser } from '../apis/backend-apis/users'
import { User } from '../../models/users'

function Preferences() {
  const { user, isAuthenticated } = useAuth0()

  if (isAuthenticated) {
    const data: User = {
      auth0_id: user?.sub,
      email: user?.email,
      first_name: user?.given_name,
      last_name: user?.family_name,
      nickname: user?.nickname,
    }
    addUser(data)
  }

  return <h1>Preferences</h1>
}

export default Preferences
