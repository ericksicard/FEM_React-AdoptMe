import React from 'react';
import { render } from 'react-dom';
import SearchParams from "./SearchParams";


const App = () => {
  //return React.createElement("div", { id: "parent-element" }, [
  //  React.createElement("h1", { id: "children-element" }, "Adopt Me!"),
  //  React.createElement(Pet, {
  //    name: "Luna",
  //    animal: "Dog",
  //    breed: "Havanese",
  //  }),
  //  React.createElement(Pet, {
  //    name: "Pepper",
  //    animal: "Bird",
  //    breed: "Cockatiel",
  //  }),
  //  React.createElement(Pet, {
  //    name: "Doink",
  //    animal: "Cat",
  //    breed: "Mixed",
  //  }),
  //]);

  return (
    <div id="parent-element">
      <h1 id="child-element">"Adopt Me!</h1>
      <SearchParams/>
    </div>
  )
};

render(<App />, document.getElementById("root"));
