import React from "react";

const StyledButton = (props) => {
  return (
    <a className="search-icon" onClick={props.click}>
      {props.children}
    </a>
  );
};

export default StyledButton;
