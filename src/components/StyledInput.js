import React from "react";

const StyledInput = (props) => {
  const { value, change, placeholder } = props;

  return (
    <input
      className="search-input"
      type="text"
      value={value}
      onChange={change}
      placeholder={placeholder}
    />
  );
};

export default StyledInput;
