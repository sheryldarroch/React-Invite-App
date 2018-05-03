import React from 'react';
import PropTypes from 'prop-types';

import GuestInputForm from './GuestInputForm';
import EventInputForm from './EventInputForm';

const Header = props =>
    <header>
      <h1>Invite</h1>
      <p>An Event GuestList App</p>
      <EventInputForm
        event={props.event}
        newEventSubmitHandler={props.newEventSubmitHandler}
        toggleEventEditing={this.toggleEventEditing}
        handleEventName={props.handleEventName}
        pendingName={props.pendingName}
        handleEventDate={props.handleEventDate}
        pendingDate={props.pendingDate}
        handleEventTime={props.handleEventTime}
        pendingTime={props.pendingTime}
        handleEventLocation={props.handleEventLocation}
        pendingLocation={props.pendingLocation}
      />
      <GuestInputForm
        pendingGuest={props.pendingGuest}
        handleNewGuest={props.handleNewGuest}
        newGuestSubmitHandler
        ={props.newGuestSubmitHandler}
      />
    </header>;

  Header.propTypes={
    event: PropTypes.object.isRequired,
    newEventSubmitHandler: PropTypes.func.isRequired,
    handleEventName: PropTypes.func.isRequired,
    pendingName: PropTypes.string.isRequired,
    handleEventDate: PropTypes.func.isRequired,
    pendingDate: PropTypes.string.isRequired,
    handleEventTime: PropTypes.func.isRequired,
    pendingTime: PropTypes.string.isRequired,
    handleEventLocation: PropTypes.func.isRequired,
    pendingLocation: PropTypes.string.isRequired,
    newGuestSubmitHandler: PropTypes.func.isRequired,
    handleNewGuest: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
  };
export default Header;
