import { useAuth0 } from '@auth0/auth0-react'
import useGetUserById from '../hooks/useGetUserById'
import { addUser } from '../apis/backend-apis/users'
import { User } from '../../models/users'

async function AddUser() {
  const { user, isAuthenticated } = useAuth0()
  const auth = user?.sub
  const { data, isLoading, isError } = useGetUserById(auth)
  if (isLoading) {
    return <p>Waiting on user details...</p>
  }
  if (isError) {
    return console.log('error with user')
  }
  if (data)
    if (isAuthenticated && data.email === undefined) {
      const data: User = {
        auth0_id: user?.sub,
        email: user?.email,
        first_name: user?.given_name,
        last_name: user?.family_name,
        nickname: user?.nickname,
      }
      addUser(data)
    }
}

export default AddUser
