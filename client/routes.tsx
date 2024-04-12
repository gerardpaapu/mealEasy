import { Route, createRoutesFromElements } from 'react-router-dom'

import Landing from './pages/Landing'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'
import Recipes from './pages/Recipes'
import Preferences from './pages/Preferences'
import App from './components/App'
import WeekPlan from './pages/WeekPlan'

export const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<Landing />} />
    <Route path="home" element={<App />}>
      <Route path="profile/:id" element={<Profile />} />
      <Route path="profile/:id/edit" element={<EditProfile />} />
      <Route path="recipes/weekplan" element={<WeekPlan />} />
      <Route path="recipes" element={<Recipes />} />
      <Route path="preferences" element={<Preferences />} />
    </Route>
  </>,
)
