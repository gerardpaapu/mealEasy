import { Route, createRoutesFromElements } from 'react-router-dom'

import Landing from './pages/Landing'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'
import Recipes from './pages/Recipes'
import Preferences from './pages/Preferences'
import App from './components/App'
import WeekPlan from './pages/WeekPlan'
import ShoppingList from './pages/ShoppingList'

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<Landing />} />
    <Route path="home" element={<App />}>
      <Route index element={<WeekPlan />} />
      <Route path="profile" element={<Profile />} />
      <Route path="profile/edit" element={<EditProfile />} />
      <Route path="recipes" element={<Recipes />} />
      <Route path="preferences" element={<Preferences />} />
      <Route path="shopping/:id" element={<ShoppingList />} />
    </Route>
  </>,
)

export default routes
