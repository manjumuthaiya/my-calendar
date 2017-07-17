/*
    ./src/components/App.jsx
*/
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions';
import Nav from './Nav';
import Calendar from './Calendar';
import Events from './Events';
import MakeAppointmentButton from './MakeAppointmentButton';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

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

App.propTypes = {
  fetchEvents: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchEvents,
  }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(App);