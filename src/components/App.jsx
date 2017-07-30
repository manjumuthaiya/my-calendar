/*
    ./src/components/App.jsx
*/
import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchEvents } from '../actions';
import Nav from './Nav';
import Calendar from './Calendar';
import Events from './Events';
import MakeAppointmentButton from './MakeAppointmentButton';
import MakeAppointmentModal from './MakeAppointmentModal';

export class App extends React.Component {
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
        <MakeAppointmentModal />
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