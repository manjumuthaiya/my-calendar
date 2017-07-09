/*
    ./src/components/App.jsx
*/
import React from 'react';
import Nav from './Nav';
import Calendar from './Calendar';
import Events from './Events';
import MakeAppointmentButton from './MakeAppointmentButton';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Calendar />
        <Events />
        <MakeAppointmentButton />
      </div>
    );
  }
}

export default App;