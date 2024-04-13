import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import useGetUserById from '../hooks/useGetUserById'

const preferences = [
  {
    name: 'balanced',
    type: 'diet',
  },
  {
    name: 'no-nuts',
    type: 'allergies',
  },
  {
    name: 'low-carb',
    type: 'diet',
  },
]

const getTypes = () => {
  const arr = Array.from(new Set(preferences.map((item) => item.type)))
  return arr
}
const typesArr = getTypes()

function Profile() {
  const { user } = useAuth0()

  const auth = user?.sub

  const { data, isLoading, isError } = useGetUserById(auth)

  if (isLoading) {
    return <p>is Loading ...</p>
  }

  if (isError) {
    return <p>An Error has occurred. </p>
  }

  if (data)
    return (
      <div>
        <h1 className="text-center text-3xl">Welcome {data.nickname} </h1>
        <div className="mt-5">
          <h2 className="mb-5 ml-2 text-2xl">My Personal Details</h2>
          <div className="ml-10">
            <p className="mb-2">
              <strong>Nickname:</strong> {data.nickname}
            </p>
            <p className="mb-2">
              <strong>First name:</strong> {data.first_name}
            </p>
            <p className="mb-2">
              <strong>Last name:</strong> {data.last_name}
            </p>
            <p className="mb-2">
              <strong>Email:</strong> {data.email}
            </p>
          </div>
          <button className=" ml-10 mt-5 border-4">
            <Link to="edit">Edit Profile</Link>
          </button>
        </div>
        <div className="mt-5">
          <h2 className="ml-2 text-2xl">Preferences</h2>
          <ul className="ml-10">
            {typesArr.map((item) => (
              <li key={item}>
                <h3 className="mb-3 mt-5 text-xl">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </h3>
                <ul className="ml-5">
                  {preferences.map((pref) =>
                    pref.type === item ? (
                      <li key={pref.name} className="mb-2">
                        {pref.name.charAt(0).toUpperCase() + pref.name.slice(1)}
                      </li>
                    ) : null,
                  )}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <button className=" ml-10 mt-5 border-4">
          <Link to="/home/preferences">Edit Preferences</Link>
        </button>
      </div>
    )
}

export default Profile
