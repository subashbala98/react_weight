import React, { useState } from "react";
import "./App.css";
import Accordion from "./Component/Accordion";
import Dropdown from "./Component/Dropdown";
import Home from "./Component/Home";
import Route from "./Component/Route";
import Search from "./Component/Search";
import Translate from "./Component/Translate";

const items = [
  { title: "What is React?", content: "React is a Javascript Library" },
  {
    title: "Why we need to use React?",
    content:
      "React is rich javascript Library, here we can reuse the code and make an interactive UI design",
  },
  {
    title: "How we can use the react?",
    content:
      "Use by to create a component and passing value through the props.",
  },
];

const options = [
  { label: "Change Clor to Red", value: "red" },
  { label: "Change Color to Green", value: "green" },
  { label: "A Shade of Blue", value: "blue" },
];

const App = () => {
  const [dropdownValue, setDropdownValue] = useState(options[0]);
  return (
    <div>
      <Home />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Choose the color:"
          onSetDropdown={setDropdownValue}
          dropdownValue={dropdownValue}
          options={options}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
