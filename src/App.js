import React, { useState } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './Details';
import SearchParams from "./SearchParams";
import ThemeContext from './ThemeContext';


const App = () => {
  const themeHook = useState('darkblue');
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
      <Router>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
        <div>
            <Switch>
              <Route path="/details/:id" component={Details} />
              <Route path="/"><SearchParams /></Route>
            </Switch>
        </div>
      </Router>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
