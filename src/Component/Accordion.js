import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };
  const show_accordion = items.map(({ title, content }, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={title}>
        <div
          className={`ui title ${active} `}
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>
          {title}
        </div>
        <div className={`ui content ${active}`}>
          <p>{content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled fluid accordion">{show_accordion}</div>;
};

export default Accordion;
