import { useAuth0 } from '@auth0/auth0-react'

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
    <button onClick={handleLogin} className="bg-white">
      Log in
    </button>
  )
}

export default Login
