import { useAuth0 } from '@auth0/auth0-react'
import Login from '../components/Login'

const fakeData = {
  auth0_id: 'auth0|648fd1c873375442becf2c60',
  email: 'katie@example.com',
  first_name: 'Katie',
  last_name: 'Davies',
  nickname: 'Katie',
}

function EditProfile() {
  const { user, isAuthenticated } = useAuth0()

  isAuthenticated && (
    <div>
      <h1>Edit Your Profile</h1>
      <form>
        <input type="text" name="first_name" placeholder={user?.name} />
      </form>
    </div>
  )

  return (
    <>
      <h2>Please login</h2>
      <Login />
    </>
  )
}

export default EditProfile
