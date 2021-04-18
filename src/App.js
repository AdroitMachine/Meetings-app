import { Route, Switch } from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites'
import MainNavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>

        <Route path='/' exact={true}>
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetup' exact>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites' exact>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App;
