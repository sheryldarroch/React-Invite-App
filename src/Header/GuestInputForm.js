import React from 'react';
import PropTypes from 'prop-types';

const GuestInputForm = props =>
    <form onSubmit={props.handleNewGuestSubmition}>
        <input
          type="text"
          onChange={props.handleNewGuest}
          value={props.pendingGuest}
          placeholder="Invite Someone"
        />
        <button type="submit" name="submit" value="submit">Submit</button>
    </form>;

    GuestInputForm.propTypes = {
      handleNewGuestSubmition: PropTypes.func.isRequired,
      handleNewGuest: PropTypes.func.isRequired,
      pendingGuest: PropTypes.string.isRequired
    };

export default GuestInputForm;
