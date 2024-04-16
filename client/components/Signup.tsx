import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Button from './Button'

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
    <Button onClick={handleLogin} className=" w-40">
      Sign Up
    </Button>
  )
}

export default Signup
