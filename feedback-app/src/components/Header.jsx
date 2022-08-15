import React from "react";
import PropTypes from "prop-types";

function Header({ bgColor, text, color }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: color,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

Header.defaultProps = {
  bgColor: " rgba(0,0,0,0.3)",
  color: "blue",
};
export default Header;
