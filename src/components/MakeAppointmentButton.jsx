import React from 'react';

function MakeAppointmentButton() {
  return (
    <div className="make-appointment-button">
      <button
        type="button"
        className="btn"
      >
        Make new appointment
      </button>
    </div>
  );
}

MakeAppointmentButton.propTypes = {

};

export default MakeAppointmentButton;