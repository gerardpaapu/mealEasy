import { useAuth0 } from '@auth0/auth0-react'
import Button from './Button'

function Login() {
  const { loginWithRedirect } = useAuth0()

  function handleLogin() {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'login',
        redirect_uri: `${window.location.origin}/home`,
      },
    })
  }

  return (
    <button
      onClick={handleLogin}
      className="hover:text-buttonGreen border-buttonGreen text-buttonGreen btn btn-outline w-40 shadow-none hover:bg-transparent"
    >
      Log In
    </button>
  )
}

export default Login
