import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
  return (
    <div className="layout-body flex min-h-screen flex-col">
      <Header />
      <div className="mx-auto max-w-screen-2xl flex-1 px-4">
        {/* max-w-screen-xl limits the width to an extra large screen size, 
            mx-auto centers the container horizontally, and px-4 adds some 
            padding to the sides */}
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
