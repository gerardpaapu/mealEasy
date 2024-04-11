import { Route, createRoutesFromElements } from 'react-router-dom'

import Landing from './pages/Landing'
import Home from './pages/WeekPlan'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'
import Recipes from './pages/Recipes'
import Preferences from './pages/Preferences'
import App from './components/App'

export const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<Landing />} />
    <Route path="home" element={<App />}>
      <Route path="profile/:id" element={<Profile />} />
      <Route path="profile/id/edit" element={<EditProfile />} />
      <Route path="weekplan" element={<Home />} />
      <Route path="recipes" element={<Recipes />} />
      <Route path="preferences" element={<Preferences />} />
    </Route>
  </>,
)
