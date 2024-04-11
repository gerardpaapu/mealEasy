function Landing() {
  return (
    <html lang="en">
      <body className="landing-body min-h-screen w-screen">
        <div className="flex justify-end">
          {/* <Login />
      <Register /> */}
          <button>Sign up</button>
          <button>Log in</button>
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
            {/* <Register/> */}
            <button> Sign Up</button>
          </div>
          <div className="flex justify-around">
            <div>
              <h1>image</h1>
              <p>paragraph</p>
            </div>
            <div>
              <h1>image</h1>
              <p>paragraph</p>
            </div>
            <div>
              <h1>image</h1>
              <p>paragraph</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}

export default Landing
