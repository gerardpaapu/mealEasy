import { useAuth0 } from '@auth0/auth0-react'
import { addUser } from '../apis/backend-apis/users'
import { User } from '../../models/users'
import useGetPreferences from '../hooks/useGetPreferences'

function Preferences() {
  const { user, isAuthenticated } = useAuth0()
  const { data: preferences, isLoading, isError } = useGetPreferences()
 

  if (isLoading) {
    return <p>Retreiving your data</p>
  }

  if (isError) {
    return <p>There was an error retrieving your profile</p>
  }

  if (isAuthenticated && user) {
    const data: User = {
      auth0_id: user?.sub,
      email: user?.email,
      first_name: user?.given_name,
      last_name: user?.family_name,
      nickname: user?.nickname,
    }
    addUser(data)
  }

  function handleClick(e) {
    console.log(e.target)
  }

  if (preferences) {
    const getTypes = () => {
      const arr = Array.from(new Set(preferences.map((item) => item.type)))
      return arr
    }
    const typesArr = getTypes()

    return (
      <div className="mt-5">
        <h2 className="ml-2 text-2xl">Preferences</h2>
        <ul className="ml-10">
          {typesArr.map((item) => (
            <li key={item}>
              <h3 className="mb-3 mt-5 text-xl">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </h3>
              <div className="container max-w-md">
                <ul className="ml-5 grid grid-cols-3 gap-4">
                  {preferences.map((pref) =>
                    pref.type === item ? (
                      <li key={pref.name} className="mb-2">
                        <button
                          onClick={handleClick}
                          className="w-full rounded-lg border-none bg-yellow-500 px-4 py-1 font-bold"
                        >
                          {pref.name.charAt(0).toUpperCase() +
                            pref.name.slice(1)}
                        </button>
                      </li>
                    ) : null,
                  )}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Preferences
