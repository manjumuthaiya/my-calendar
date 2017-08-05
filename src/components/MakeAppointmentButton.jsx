import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { openModal } from '../actions';

function MakeAppointmentButton({ openModal }) {
  return (
    <div className="make-appointment-button">
      <button
        type="button"
        className="btn"
        onClick={openModal}
      >
        Make new appointment
      </button>
    </div>
  );
}

MakeAppointmentButton.propTypes = {
  openModal: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    openModal,
  }, dispatch);
}
export default withRouter(connect(null, mapDispatchToProps)(MakeAppointmentButton));