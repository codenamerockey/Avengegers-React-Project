import React, { useState } from "react";
import { Route, Link } from "react-router-dom";

import Home from "./Compontents/Home";
import AvengersList from "./Compontents/AvengersList";
import AvengerPage from "./Compontents/AvengerPage";
import avengers from "../src/data";

import "./App.css";

function App() {
  const [avenger, setAvengers] = useState(avengers);

  return (
    <div className="App">
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/avengers">Avengers</Link>
        </li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route exact path="/avengers" component={AvengersList} />
      <Route path="/avengers/:id" component={AvengerPage} />
    </div>
  );
}

export default App;
