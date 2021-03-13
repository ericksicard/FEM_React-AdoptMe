import React from 'react';
import { render } from 'react-dom';
import SearchParams from "./SearchParams";


const App = () => {
  return (
    <React.StrictMode>
      <div id="parent-element">
        <h1 id="child-element">"Adopt Me!</h1>
        <SearchParams/>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
