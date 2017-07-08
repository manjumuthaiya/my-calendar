/*
    ./src/components/App.jsx
*/
import React from 'react';
import Nav from './Nav';
import Calendar from './Calendar';
import Events from './Events';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Calendar />
        <Events />
      </div>
    );
  }
}

export default App;