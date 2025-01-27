import { useAuth0 } from '@auth0/auth0-react'
import Button from './Button'

const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <Button
      className="ml-10 mt-6"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </Button>
  )
}

export default LogoutButton
