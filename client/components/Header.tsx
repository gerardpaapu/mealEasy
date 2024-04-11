import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="mb-10 ml-5 mr-5 mt-5 flex h-16 items-center justify-between px-4">
      <Link to="weekplan">
        <img
          src="../Public/images/greenLogo.png"
          alt="MealEasy logo"
          className="h-10"
        />
      </Link>
      <Link to="profile/:id">
        <img src="../Public/images/userIcon.png" alt="User" className="h-10" />
      </Link>
    </div>
  )
}
