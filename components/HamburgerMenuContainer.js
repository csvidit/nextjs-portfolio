import React from 'react';
import HamburgerButton from './HamburgerButton';
import HamburgerMenu from './HamburgerMenu';

class HamburgerMenuContainer extends React.Component {
  state = {
    isMenuOpen: false
  }

  handleMenuButtonClick = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  }

  render() {
    return (
      <React.Fragment>
        <HamburgerButton onClick={this.handleMenuButtonClick} />
        <HamburgerMenu isOpen={this.state.isMenuOpen} />
      </React.Fragment>
    );
  }
}

export default HamburgerMenuContainer;