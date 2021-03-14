import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './Details';
import SearchParams from "./SearchParams";


const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
            <Switch>
              <Route path="/details/:id">
                <Details />
              </Route>
              <Route path="/">
                <SearchParams />
              </Route>
            </Switch>
        </div>
      </Router>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
