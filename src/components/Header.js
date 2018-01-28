import React from "react";

const Header = props => {
  return (
    <header className="top">
      <h1>Catch of the day</h1>
      <h3 className="tagline">{props.tagline}</h3>
    </header>
  );
};

export default Header;
