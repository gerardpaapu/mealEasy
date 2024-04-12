import { useAuth0 } from '@auth0/auth0-react'
import Login from '../components/Login'
import {
  IfAuthenticated,
  IfNotAuthenticated,
} from '../components/Authenticated'

// const fakeData = {
//   auth0_id: 'auth0|648fd1c873375442becf2c60',
//   email: 'katie@example.com',
//   first_name: 'Katie',
//   last_name: 'Davies',
//   nickname: 'Katie',
// }

function EditProfile() {
  const { user } = useAuth0()
  console.log(user)

  return (
    <>
      <IfAuthenticated>
        {user && (
          <div>
            <h1>Edit Your Profile</h1>
            <form>
              <label htmlFor="nickname">
                Nickname:
                <input
                  type="text"
                  name="nickname"
                  placeholder={user?.nickname}
                />
              </label>

              <label htmlFor="first_name">
                First Name:
                <input type="text" name="first_name" placeholder={user?.name} />
              </label>
              <label htmlFor="last_name">
                Last Name:
                <input
                  type="text"
                  name="last_name"
                  placeholder={user?.given_name}
                />
              </label>
              <label htmlFor="email">
                Email:
                <input type="text" name="email" placeholder={user?.email} />
              </label>
              <button>Save</button>
            </form>
          </div>
        )}
      </IfAuthenticated>

      <IfNotAuthenticated>
        <>
          <h2>Please login</h2>
          <Login />
        </>
      </IfNotAuthenticated>
    </>
  )
}

export default EditProfile
