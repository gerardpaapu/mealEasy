import { useAuth0 } from '@auth0/auth0-react'

function Signup() {
  const { loginWithRedirect } = useAuth0()

  function handleLogin() {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signup',
        redirect_uri: `${window.location.origin}/home/preferences`,
      },
    })
  }

  return (
    <button onClick={handleLogin} className="bg-white">
      Sign Up
    </button>
  )
}

export default Signup
