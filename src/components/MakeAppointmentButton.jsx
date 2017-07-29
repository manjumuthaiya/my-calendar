import React from 'react';
import PropTypes from 'prop-types';

function MakeAppointmentButton({ onClick }) {
  return (
    <div className="make-appointment-button">
      <button
        type="button"
        className="btn"
        onClick={onClick}
      >
        Make new appointment
      </button>
    </div>
  );
}

MakeAppointmentButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MakeAppointmentButton;