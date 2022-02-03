import React from "react";
import Link from "./Link";
const setPath = [
  { path: "./", label: "Home" },
  { path: "/search", label: "Search" },
  { path: "/dropdown", label: "Dropdown" },
  { path: "/translate", label: "Translate" },
];
const Home = () => {
  return (
    <div className="ui secondary pointing menu">
      {setPath.map((data) => {
        return <Link key={data.path} path={data.path} name={data.label} />;
      })}
    </div>
  );
};
export default Home;
