/*
    ./src/components/App.jsx
*/
import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchEvents, openModal, closeModal } from '../actions';
import Nav from './Nav';
import Calendar from './Calendar';
import Events from './Events';
import MakeAppointmentButton from './MakeAppointmentButton';
import MakeAppointmentModal from './MakeAppointmentModal';

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
        <MakeAppointmentButton onClick={this.props.openModal} />
        <MakeAppointmentModal
          isOpen={this.props.isModalOpen}
          closeModal={this.props.closeModal} />
      </div>
    );
  }
}

App.propTypes = {
  fetchEvents: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isModalOpen: _.get(state, 'modal.isOpen'),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchEvents,
    openModal,
    closeModal,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);