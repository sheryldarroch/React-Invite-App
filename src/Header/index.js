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
        newGuestSubmitHandler={props.newGuestSubmitHandler}
      />
    </header>;

  Header.propTypes={
    newGuestSubmitHandler: PropTypes.func.isRequired,
    handleNewGuest: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
  };
export default Header;
