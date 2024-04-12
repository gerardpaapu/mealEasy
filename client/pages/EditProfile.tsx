import { useAuth0 } from '@auth0/auth0-react'
import Login from '../components/Login'
import {
  IfAuthenticated,
  IfNotAuthenticated,
} from '../components/Authenticated'
import { useState } from 'react'
import { User } from '../../models/users'

// const fakeData = {
//   auth0_id: 'auth0|648fd1c873375442becf2c60',
//   email: 'katie@example.com',
//   first_name: 'Katie',
//   last_name: 'Davies',
//   nickname: 'Katie',
// }

function EditProfile() {
  const { user } = useAuth0()

  const [profile, setProfile] = useState({
    nickname: user?.nickname,
    first_name: user?.given_name,
    last_name: user?.family_name,
    email: user?.email,
  } as User)

  console.log(user)

  // const auth = user?.sub

  // function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault()
  //   const postData = { ...profile, auth0_id: auth }
  //   //put in a mutate here to update the data
  // }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name
    const value = e.target.value
    setProfile({ ...profile, [name]: value })
  }
  console.log(profile)
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
                  onChange={handleChange}
                />
              </label>

              <label htmlFor="first_name">
                First Name:
                <input
                  type="text"
                  name="first_name"
                  placeholder={user?.name}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="last_name">
                Last Name:
                <input
                  type="text"
                  name="last_name"
                  placeholder={user?.given_name}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="email">
                Email:
                <input
                  type="text"
                  name="email"
                  placeholder={user?.email}
                  onChange={handleChange}
                />
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
