import React, { useState } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Home from './Compontents/Home';
import AvengersList from './Compontents/AvengersList';
import AvengerPage from './Compontents/AvengerPage';
import avengers from '../src/data';

import './App.css';

function App() {
  const [avenger, setAvengers] = useState(avengers);

  return (
    <div className="App">
      <ul className="navbar">
        <li>
          <NavLink exact to="/" activeClassName="activeNavButton">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/avengers" activeClassName="activeNavButton">
            Avengers
          </NavLink>
        </li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/avengers"
        render={props => <AvengersList {...props} avengers={avengers} />}
      />
      <Route
        path="/avengers/:id"
        render={props => <AvengerPage {...props} avengers={avengers} />}
      />
    </div>
  );
}

export default App;
