import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";
const options = [
  { label: "Tamil", value: "ta" },
  { label: "Spanish", value: "es" },
  { label: "Kannada", value: "kn" },
  { label: "Arabic", value: "ar" },
];
const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [searchItem, setSearchItem] = useState("");
  return (
    <div className=".dropdown_position">
      <div className="ui segment input_align">
        <div className="ui form">
          <div className="ui text">
            <label>Enter Text</label>
            <input
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              type="text"
            />
          </div>
        </div>
      </div>
      <Dropdown
        label={"Select a Language."}
        onSetDropdown={setLanguage}
        dropdownValue={language}
        options={options}
      />
      <br />
      <hr></hr>
      <div style={{ textAlign: "center" }} className="ui header">
        <h2>Output</h2>
        <Convert language={language} searchItem={searchItem} />
      </div>
    </div>
  );
};

export default Translate;
