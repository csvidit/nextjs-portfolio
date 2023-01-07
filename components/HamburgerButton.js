import { Squeeze as Hamburger } from "hamburger-react";
import React from "react";

class HamburgerButton extends React.Component {
  handleClick = () => {
    this.props.onClick();
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        <Hamburger onToggle={toggled => {
            if(toggled)
            {

            }
            else 
            {
                
            }
        }}></Hamburger>
      </button>
    );
  }
}

export default HamburgerButton;
