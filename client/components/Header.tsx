import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="mb-24 ml-5 mr-5 mt-10 flex h-16 items-center justify-between px-4">
      <Link to="/home">
        <img src="/images/greenLogo.png" alt="MealEasy logo" className="h-10" />
      </Link>
      <Link to="profile">
        <img src="/images/userIcon.png" alt="User" className="h-10" />
      </Link>
    </div>
  )
}
