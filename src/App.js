import React from 'react';
import './App.css';
import Faved from './components/Faved';
import Main from './components/Main';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink as Link,
} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <header>
          <h2>Pokemon app</h2>
          <nav>
            <Link exact activeClassName='is-active' to='/'>
              Home
            </Link>
            <Link activeClassName='is-active' to='/favs'>
              Favorites
            </Link>
          </nav>
        </header>
        <div className='body'>
          <Switch>
            <Route path='/favs'>
              <Faved />
            </Route>
            <Route path='/'>
              <Main />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
