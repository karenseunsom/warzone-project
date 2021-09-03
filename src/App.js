import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import SearchPage from './pages/SearchPage';
import FriendsPage from './pages/FriendsPage'
import Navs from './components/Navs';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerDetailsPage from './pages/PlayerDetailsPage';
// import PlayerDetailsPage from './pages/PlayerDetailsPage';


function App() {
  return (
    <Router>
      <div className="App body">
        <Navs></Navs>
        <Container className="pt-4 page pb-4">
          <Switch>
            <Route exact path="/">
              <SearchPage />
            </Route>
            <Route path="/pinned">
              <FriendsPage />
            </Route>
            <Route path="/:player">
              <PlayerDetailsPage />
            </Route>
          </Switch>
          {/* <Tracer src={tracer} /> */}
        </Container>
      </div>
    </Router>
  );
}

export default App;
