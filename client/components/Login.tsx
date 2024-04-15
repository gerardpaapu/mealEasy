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
    <Button onClick={handleLogin} className="btn btn-outline btn-accent w-40">
      Log In
    </Button>
  )
}

export default Login
