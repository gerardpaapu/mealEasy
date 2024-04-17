import { useAuth0 } from '@auth0/auth0-react'
import Button from './Button'

const LogoutButton = () => {
  const { logout } = useAuth0()

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to log out?')
    if (confirmLogout) {
      logout({ returnTo: window.location.origin })
    }
  }

  return (
    <Button className="ml-10 mt-6" onClick={handleLogout}>
      Log Out
    </Button>
  )
}

export default LogoutButton
