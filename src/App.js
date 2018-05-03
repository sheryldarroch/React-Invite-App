import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import MainContent from './MainContent';

class App extends Component {

  state = {
    pendingName: '',
    pendingDate: '',
    pendingTime: '',
    pendingLocation: '',

    event: {
        // name: "Tom's 50th Birthday",
        // date: "November 28, 2018",
        // time: "7:00 pm - midnight",
        // location: "M1 Concourse"
      },

    isFiltered: false,
    pendingGuest: '',
    guests: []
  }

  handleInput = (property, e) =>
    this.setState({ [property]: e.target.value });

  handleEventName = e =>
    this.handleInput("pendingName", e);

  handleEventDate = e =>
    this.handleInput("pendingDate", e);

  handleEventTime = e =>
    this.handleInput("pendingTime", e);

  handleEventLocation = e =>
    this.handleInput("pendingLocation", e);

  newEventSubmitHandler = e => {
    e.preventDefault();
    this.setState({
      event: {
        name: this.state.pendingName,
        date: this.state.pendingDate,
        time: this.state.pendingTime,
        location: this.state.pendingLocation,
        isEditing: true
      },
      // pendingName: '',
      // pendingDate: '',
      // pendingTime: '',
      // pendingLocation: ''
    });
  }

  // toggleEventEditing = e => {
  //   this.setState({
  //     event: {
  //     isEditing: !event[isEditing]
  //     }
  //   });
  // }

  lastGuestId = 0;

  newGuestId = () => {
    const id = this.lastGuestId;
    this.lastGuestId += 1;
    return id;
  };

  toggleGuestProperty = (property, id) =>
      this.setState({
        guests: this.state.guests.map(guest => {
          if(id === guest.id) {
            return {
              ...guest,
              [property]: !guest[property]
            };
          }
          return guest;
        })
      });

  toggleConfirmation = id =>
    this.toggleGuestProperty("isConfirmed", id);

  toggleEditing = id =>
    this.toggleGuestProperty("isEditing", id);

  removeGuest = id =>
    this.setState({
      guests: this.state.guests.filter(guest => id !== guest.id)
    });

  setName = (name, id) =>
      this.setState({
        guests: this.state.guests.map(guest => {
          if(id === guest.id) {
            return {
              ...guest,
              name
            };
          }
          return guest;
        })
      });


  toggleFilter = () =>
    this.setState({ isFiltered: !this.state.isFiltered });

  handleNewGuest = e =>
    this.handleInput("pendingGuest", e);

  newGuestSubmitHandler = e => {
    e.preventDefault();
    const id = this.newGuestId();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
          id
        },
        ...this.state.guests
      ],
      pendingGuest:''
    });
  }

  getTotalInvited = () => this.state.guests.length;

  getAttendingGuests = () =>
    this.state.guests.reduce(
      (total, guest) => guest.isConfirmed ? total + 1 : total,
      0);

  componentWillMount = () =>
    localStorage.getItem('guests') && this.setState({
      guests: JSON.parse(localStorage.getItem('guests'))
    });

  componentWillUpdate = (nextProps, nextState) =>
    localStorage.setItem('guests', JSON.stringify(nextState.guests));

  render() {
    const totalInvited=this.getTotalInvited();
    const numberAttending=this.getAttendingGuests();
    const numberUnconfirmed=totalInvited - numberAttending;
    return (
      <div className="App">
        <Header
          event={this.state.event}
          newEventSubmitHandler={this.newEventSubmitHandler}
          toggleEventEditing={this.toggleEventEditing}
          handleEventName={this.handleEventName}
          pendingName={this.state.pendingName}
          handleEventDate={this.handleEventDate}
          pendingDate={this.state.pendingDate}
          handleEventTime={this.handleEventTime}
          pendingTime={this.state.pendingTime}
          handleEventLocation={this.handleEventLocation}
          pendingLocation={this.state.pendingLocation}
          newGuestSubmitHandler={this.newGuestSubmitHandler}
          handleNewGuest={this.handleNewGuest}
          pendingGuest={this.state.pendingGuest}
        />
        <MainContent
          guests={this.state.guests}
          isFiltered={this.state.isFiltered}
          toggleFilter={this.toggleFilter}
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
          toggleConfirmation={this.toggleConfirmation}
          toggleEditing={this.toggleEditing}
          setName={this.setName}
          removeGuest={this.removeGuest}
          pendingGuest={this.state.pendingGuest}
        />
      </div>
    );
  }
}

export default App;
