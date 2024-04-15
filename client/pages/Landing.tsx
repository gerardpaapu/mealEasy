import Signup from '../components/Signup'
import Login from '../components/Login'
import WeekPlan from './WeekPlan'

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
        </div>
        <div className="m-10 flex justify-center">
          <Signup />
        </div>
        <div className="flex justify-around">
          <div className="flex w-1/3 flex-col flex-wrap content-center">
            <img
              src="Public/images/recipebook.jpg"
              alt="recipe book"
              className="b-2 max-h-70 w-3/4"
            />
            <p>All your recipes in one place!</p>
          </div>
          <div className="flex w-1/3 flex-col flex-wrap content-center">
            <img
              src="Public/images/dinnertable.jpg"
              alt="recipe book"
              className="b-2 max-h-70 w-3/4"
            />
            <p>More time to relax with the family!</p>
          </div>
          <div className="flex w-1/3 flex-col flex-wrap content-center">
            <img
              src="Public/images/shopping.jpg"
              alt="recipe book"
              className="b-2 max-h-70 w-3/4"
            />
            <p>Shopping lists made easy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
