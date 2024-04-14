import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import useGetUserById from '../hooks/useGetUserById'
import LogoutButton from '../components/Logout'
import Button from '../components/Button'

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
  const userId = auth ?? '-1'

  const { data, isLoading, isError } = useGetUserById(userId)

  if (isLoading) {
    return <p>is Loading ...</p>
  }

  if (isError) {
    return <p>An Error has occurred. </p>
  }

  if (data)
    return (
      <div>
        <h1 className="text-headingGreen mb-14 flex justify-center text-4xl">
          Welcome {data.nickname}
        </h1>
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
          <Button>
            {' '}
            <Link to="edit">Edit Profile</Link>
          </Button>
          <LogoutButton>Log Out</LogoutButton>
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
        <Button>
          <Link to="/home/preferences">Edit Preferences</Link>
        </Button>
      </div>
    )
}

export default Profile
