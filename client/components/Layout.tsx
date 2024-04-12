import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
  return (
    <div className={' layout-body flex min-h-screen w-screen flex-col'}>
      <div className="flex-1">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
