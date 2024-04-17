import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoutButton from './Logout'
import { useAuth0 } from '@auth0/auth0-react'

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { logout } = useAuth0()
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to log out?')
    if (confirmLogout) {
      logout({ returnTo: window.location.origin })
    }
  }

  return (
    <div className="mb-24 ml-5 mr-5 mt-10 flex h-16 items-center justify-between px-4">
      <Link to="/home">
        <img src="/images/greenLogo.png" alt="logo" className="h-10" />
      </Link>
      <div className="dropdown relative">
        <div onClick={toggleDropdown}>
          <button className="btn bg-transparent hover:bg-buttonGreen">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        {isDropdownOpen && (
          <ul
            tabIndex={0}
            className=" menu-lggit menu dropdown-content  absolute right-0 z-[2] mt-3 w-52 rounded-box bg-base-100 p-2 font-bold text-buttonGreen shadow"
          >
            {' '}
            <li className="hover:rounded-lg hover:bg-buttonGreen hover:text-white">
              <Link to="/home/profile">Profile</Link>
            </li>
            <li className="hover:rounded-lg hover:bg-buttonGreen hover:text-white">
              <Link to="/home/preferences">Preferences</Link>
            </li>
            <li className="hover:rounded-lg hover:bg-buttonGreen hover:text-white">
              <Link to="/home/recipes">Recipes</Link>
            </li>
            <li className=" bg-lightGreen hover:rounded-lg hover:bg-buttonGreen hover:text-white">
              <Link to="/home">Week Plan</Link>
            </li>
            <li className="hover:rounded-lg hover:bg-buttonGreen hover:text-white">
              <button onClick={handleLogout}>Log out</button>
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}
