import React from 'react'
import Signup from '../components/Signup'
import Login from '../components/Login'

import ImageFrontPage from '../components/ImageFrontPage'

const ImageTextSection = ({ src, alt, text }) => (
  <div className="mb-8 flex w-full flex-col items-center sm:mb-0 sm:w-1/3">
    <ImageFrontPage src={src} alt={alt} className="w-3/4" />
    <p className="mt-3 text-center">{text}</p>
  </div>
)

function Landing() {
  return (
    <div className="landing-body min-h-screen w-screen">
      <div className="flex justify-end">
        {/* <Login />
      <Register /> */}

        <Signup />
        <Login />
      </div>
      <div className=" flex flex-col  content-center justify-center">
        <div className="flex justify-center">
          <img
            src="Public/images/blackLogo.png"
            alt="MealEasy Logo"
            className="w-80"
          />

          <div className="mr-10 mt-10">
            <div className="flex space-x-4">
              {' '}
              {/* Add space between login and signup */}
              <Signup />
              <Login />
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-col items-center justify-center sm:mt-40">
          <img
            src="Public/images/blackLogo.png"
            alt="MealEasy Logo"
            className="w-64 sm:w-96"
          />
          <div className="m-10 flex justify-center">
            <Signup />
          </div>
          <div className="mt-20 flex flex-wrap justify-center sm:mt-24">
            <ImageTextSection
              src="Public/images/recipebook.jpg"
              alt="recipe book"
              text="All your recipes in one place!"
            />
            <ImageTextSection
              src="Public/images/dinnertable.jpg"
              alt="dinner table"
              text="More time to relax with the family!"
            />
            <ImageTextSection
              src="Public/images/shopping.jpg"
              alt="shopping"
              text="Shopping lists made easy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
