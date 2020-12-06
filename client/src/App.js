import Register from './components/Register'
import Login from './components/Login'
import Profile from './components/Profile'
import {BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { eraseCookie, readCookie } from './utils/Cookies';

function App() {
  const [user, setUser] = useState(readCookie('token'));

  return (
    <div>
      <BrowserRouter>
      <span>
        {user ? <>
                <Link to="/myProfile">My Profile</Link>
                <button onClick={()=>{eraseCookie('token'); setUser(false);}}>log out</button>
                </>
                :
              <>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
              </>
        }
      </span>
        <Switch>
          <Route path='/register' component={Register} >
            {!user ?
                <Register />
                :
                <Redirect to="/"/>
            }
          </Route>
          <Route path='/login'>
          {!user ?
            <Login onLogin={()=>{setUser(true)}} />
            :
            <h1>User already logged in</h1>
          }
          </Route>
          <Route path='/myProfile'>
          {user ?
            <Profile />
            :
            <h1>You are not signed in</h1>
          }
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
