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
    console.log('value', confirmLogout)
  }

  return (
    <div className="mb-24 ml-5 mr-5 mt-10 flex h-16 items-center justify-between px-4">
      <Link to="/home">
        <img src="/images/greenLogo.png" alt="logo" className="h-10" />
      </Link>
      <div className="dropdown relative">
        <div onClick={toggleDropdown}>
          <button className="hover:bg-buttonGreen btn border-transparent bg-transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
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
            className=" text-buttonGreen menu dropdown-content menu-lg absolute right-0 z-[2] mt-3 w-52 rounded-box bg-base-100 p-2 font-bold shadow"
          >
            <li className="hover:bg-buttonGreen hover:rounded-lg hover:text-white">
              <Link
                to="/home/profile"
                className="focus:bg-buttonGreen focus:text-white"
              >
                Profile
              </Link>
            </li>
            <li className="hover:bg-buttonGreen  hover:rounded-lg hover:text-white ">
              <Link
                to="/home/preferences"
                className="focus:bg-buttonGreen focus:text-white"
              >
                Preferences
              </Link>
            </li>
            <li className="hover:bg-buttonGreen hover:rounded-lg hover:text-white">
              <Link
                to="/home/recipes"
                className="focus:bg-buttonGreen focus:text-white"
              >
                Recipes
              </Link>
            </li>
            <li className=" bg-lightGreen hover:bg-buttonGreen hover:rounded-lg hover:text-white">
              <Link
                to="/home"
                className="focus:bg-buttonGreen focus:text-white"
              >
                Week Plan
              </Link>
            </li>
            <li className="hover:bg-buttonGreen hover:rounded-lg hover:text-white">
              <button onClick={handleLogout}>Log out</button>
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}
