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
      <h1>Welcome {fakeData.first_name} </h1>
      <div className="mt-5">
        <h2 className="mb-5 text-2xl">My Personal Details</h2>
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
      </div>
      <div className="mt-5">
        <h2 className="text-2xl">Preferences</h2>
        <ul>
          {types.map((item) => (
            <li key={item}>
              <h3>{item.charAt(0).toUpperCase() + item.slice(1)}</h3>
              <ul>
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
    </div>
  )
}

export default Profile
