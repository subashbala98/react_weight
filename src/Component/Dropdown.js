import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ label, options, dropdownValue, onSetDropdown }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    document.addEventListener("click", (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    });
  }, []);
  const get_dropdownvalues = options.map((option) => {
    if (option.value === dropdownValue.value) {
      return null;
    }
    return (
      <div
        onClick={() => onSetDropdown(option)}
        key={option.value}
        className="item"
        value={option.value}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "40px" }} className="text">
        {label}
      </div>
      <div
        ref={ref}
        onClick={() => setOpen(!open)}
        className={`dropdown_position ui selection dropdown ${
          open ? "visible active" : ""
        }`}
      >
        <i className="dropdown icon"></i>
        <div className="item">{dropdownValue.label}</div>

        <div className={`menu ${open ? "visible transition" : ""}`}>
          {get_dropdownvalues}
        </div>
      </div>
      {/* <h1 style={{ color: `${dropdownValue.value}` }}>
        Display a color text based on the user selection.
      </h1> */}
    </div>
  );
};
export default Dropdown;
