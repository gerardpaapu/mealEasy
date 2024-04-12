import { Link } from 'react-router-dom'

const fakeData = {
  auth0_id: 'auth0|648fd1c873375442becf2c60',
  email: 'katie@example.com',
  first_name: 'Katie',
  last_name: 'Davies',
  nickname: 'Katie',
}

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

const typesArray = () => {
  const arr = Array.from(new Set(preferences.map((item) => item.type)))
  return arr
}
const types = typesArray()

function Profile() {
  return (
    <div>
      <h1 className="text-center text-3xl">Welcome {fakeData.first_name} </h1>
      <div className="mt-5">
        <h2 className="mb-5 ml-2 text-2xl">My Personal Details</h2>
        <div className="ml-10">
          <p>
            <strong>First name:</strong> {fakeData.first_name}
          </p>
          <p>
            <strong>Last name:</strong> {fakeData.last_name}
          </p>
          <p>
            <strong>Email:</strong> {fakeData.email}
          </p>
        </div>
        <button className=" ml-10 mt-5 border-4">
          <Link to="edit">Edit Profile</Link>
        </button>
      </div>
      <div className="mt-5">
        <h2 className="ml-2 text-2xl">Preferences</h2>
        <ul className="ml-10">
          {types.map((item) => (
            <li key={item}>
              <h3 className="mb-3 mt-5 text-xl">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </h3>
              <ul className="ml-5">
                {preferences.map((pref) =>
                  pref.type === item ? (
                    <li key={pref.name}>{pref.name}</li>
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
