import React, { FunctionComponent } from "react";
import "./styles.scss";

const Header: FunctionComponent = () => {
  return (
    <header className="header">
      <div className="header-item"></div>
      <div className="header-item">
        <p className="header-item-logo">onlinePiano</p>
      </div>
      <div className="header-item">
        <span>About</span>
      </div>
    </header>
  );
};

export default Header;
