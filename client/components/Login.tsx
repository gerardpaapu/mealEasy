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
    <Button
      onClick={handleLogin}
      className="w-40 border-2 border-lime-900 bg-white px-4 py-2 font-bold text-black hover:bg-lime-200"
    >
      Log In
    </Button>
  )
}

export default Login
