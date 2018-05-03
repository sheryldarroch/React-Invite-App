import React from 'react';
import PropTypes from 'prop-types';

const EventInputForm = props =>
  <form className="eventForm" onSubmit={props.newEventSubmitHandler}>
    <input
      type="text"
      placeholder="Name of Event"
      value={props.pendingName}
      onChange={props.handleEventName}
    />
    <input
      type="text"
      placeholder="Date of Event"
      value={props.pendingDate}
      onChange={props.handleEventDate}
    />
    <input
      type="text"
      placeholder="Time of Event"
      value={props.pendingTime}
      onChange={props.handleEventTime}
    />
    <input
      type="text"
      placeholder="Location of Event"
      value={props.pendingLocation}
      onChange={props.handleEventLocation}
    />
    <button type="submit" name="submit" value="submit">Submit</button>
  </form>;

  EventInputForm.propTypes = {
    event: PropTypes.object.isRequired,
    newEventSubmitHandler: PropTypes.func.isRequired,
    toggleEventEditing: PropTypes.func.isRequired,
    handleEventName: PropTypes.func.isRequired,
    pendingName: PropTypes.string.isRequired,
    handleEventDate: PropTypes.func.isRequired,
    pendingDate: PropTypes.string.isRequired,
    handleEventTime: PropTypes.func.isRequired,
    pendingTime: PropTypes.string.isRequired,
    handleEventLocation: PropTypes.func.isRequired,
    pendingLocation: PropTypes.string.isRequired
  }

export default EventInputForm;
