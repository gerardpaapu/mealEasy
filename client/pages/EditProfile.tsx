import { useAuth0 } from '@auth0/auth0-react'
import Login from '../components/Login'
import {
  IfAuthenticated,
  IfNotAuthenticated,
} from '../components/Authenticated'
import { useEffect, useState } from 'react'
import { User } from '../../models/users'

import useGetUserById from '../hooks/useGetUserById'
import useUpdateUser from '../hooks/useUpdateUser'

function EditProfile() {
  const { user } = useAuth0()

  const auth = user?.sub
  const updateUser = useUpdateUser()
  const { data, isLoading, isError } = useGetUserById(auth)

  const [profile, setProfile] = useState({
    nickname: '',
    first_name: '',
    last_name: '',
    email: '',
  } as User)

  useEffect(() => {
    if (data) {
      setProfile({
        nickname: data.nickname,
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
      } as User)
    }
  }, [data])

  if (isLoading) {
    return <p>Retreiving your data</p>
  }

  if (isError) {
    return <p>There was an error retrieving your profile</p>
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const postData = { ...profile, auth0_id: auth }
    updateUser.mutate(postData)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name
    const value = e.target.value
    setProfile({ ...profile, [name]: value })
  }
  console.log(profile)
  if (data)
    return (
      <>
        <IfAuthenticated>
          {user && (
            <div>
              <h1>Edit Your Profile</h1>
              <form onSubmit={handleSubmit}>
                <label htmlFor="nickname">
                  Nickname:
                  <input
                    type="text"
                    name="nickname"
                    placeholder={data.nickname}
                    onChange={handleChange}
                  />
                </label>

                <label htmlFor="first_name">
                  First Name:
                  <input
                    type="text"
                    name="first_name"
                    placeholder={data.first_name}
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="last_name">
                  Last Name:
                  <input
                    type="text"
                    name="last_name"
                    placeholder={data.last_name}
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="email">
                  Email:
                  <input
                    type="text"
                    name="email"
                    placeholder={data.email}
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
