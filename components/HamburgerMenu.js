import { Squeeze as Hamburger } from "hamburger-react";
import React from "react"

class HamburgerMenu extends React.Component {
  render() {
    return (
      <nav
        // className={`hamburger-menu ${
        //   this.props.isOpen ? "hamburger-menu--open" : ""
        // }`}
        className={`invisible ${
          this.props.isOpen ? "visible" : ""
        }`}
      >
        <ul>
          <li>
            <a href="#">Menu item 1</a>
          </li>
          <li>
            <a href="#">Menu item 2</a>
          </li>
          <li>
            <a href="#">Menu item 3</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default HamburgerMenu;
