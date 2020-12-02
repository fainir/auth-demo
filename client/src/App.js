import Register from './components/Register'
import Login from './components/Login'
import Profile from './components/Profile'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <span>
        <Link to="/regiter">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/myProfile">My Profile</Link>
      </span>
        <Switch>
          <Route path='/regiter' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/myProfile' component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
