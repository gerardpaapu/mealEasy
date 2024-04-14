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
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

function EditProfile() {
  const { user } = useAuth0()
  const navigate = useNavigate()

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
    return <p>Retrieving your data</p>
  }

  if (isError) {
    return <p>There was an error retrieving your profile</p>
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const postData = { ...profile, auth0_id: auth }
    updateUser.mutate(postData)

    navigate('/home/profile')
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name
    const value = e.target.value
    setProfile({ ...profile, [name]: value })
  }

  if (data)
    return (
      <>
        <IfAuthenticated>
          {user && (
            <div className="flex flex-col flex-wrap content-center">
              <h1 className=" mb-5 text-2xl">Edit Your Profile</h1>
              <form onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="nickname" className="mr-3">
                  Nickname:
                  <input
                    type="text"
                    name="nickname"
                    placeholder={data.nickname}
                    onChange={handleChange}
                    className="focus:shadow-outline mb-5 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  />
                </label>

                <label htmlFor="first_name">
                  First Name:
                  <input
                    type="text"
                    name="first_name"
                    placeholder={data.first_name}
                    onChange={handleChange}
                    className="focus:shadow-outline mb-5 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  />
                </label>
                <label htmlFor="last_name">
                  Last Name:
                  <input
                    type="text"
                    name="last_name"
                    placeholder={data.last_name}
                    onChange={handleChange}
                    className="focus:shadow-outline mb-5 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  />
                </label>
                <label htmlFor="email">
                  Email:
                  <input
                    type="text"
                    name="email"
                    placeholder={data.email}
                    onChange={handleChange}
                    className="focus:shadow-outline mb-5 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  />
                </label>
                <Button>Save</Button>
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
