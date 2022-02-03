import React, { useState } from "react";
const Link = ({ path, name }) => {
  const [active, setActive] = useState(false);
  const onClick = (e) => {
    if (e.ctrlKey) {
      return;
    }
    e.preventDefault();
    window.history.pushState({}, "", path);
    const setNavigate = new PopStateEvent("popstate");
    window.dispatchEvent(setNavigate);
    // setActive(!active);
  };
  return (
    <a
      onClick={onClick}
      href={path}
      className={`item ${active ? "active" : ""}`}
    >
      {name}
    </a>
  );
};
export default Link;
