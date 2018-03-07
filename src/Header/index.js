import React from 'react';
import PropTypes from 'prop-types';

import GuestInputForm from './GuestInputForm';

const Header = props =>
    <header>
      <h1>Invite</h1>
      <p>An Event GuestList App</p>
      <GuestInputForm
        pendingGuest={props.pendingGuest}
        handleNewGuest={props.handleNewGuest}
        handleNewGuestSubmition={props.handleNewGuestSubmition}
      />
    </header>;

  Header.propTypes={
    handleNewGuestSubmition: PropTypes.func.isRequired,
    handleNewGuest: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
  };
export default Header;
