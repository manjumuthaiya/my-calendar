import React from 'react';
import PropTypes from 'prop-types';

function MakeAppointmentForm() {
  return (
    <div className="make-appointment-form__container">
      <div className="make-appointment-form__label">
        When is it?
      </div>
      <div className="make-appointment-form__field">
        <input type="text" className="form-control" value="07/08/2017" />
      </div>
      <div className="make-appointment-form__label">
        What is it?
      </div>
      <div className="make-appointment-form__field--what">
        <input type="text" className="form-control" value="" />
        <select className="form-control">
          <option value="work">Work</option>
          <option value="personal">Personal</option>
        </select>
      </div>
      <div className="make-appointment-form__label">
        Where is it?
      </div>
      <div className="make-appointment-form__field--where">
        <input type="text" className="form-control" value="" />
      </div>
      <div className="make-appointment-form__time-labels">
        <div className="make-appointment-form__start--label">
          When will it start?
        </div>
        <div className="make-appointment-form__end--label">
          When will it end?
        </div>
      </div>
      <div className="make-appointment-form__time-fields">
        <div className="make-appointment-form__start--field">
          <input type="text" className="form-control" value="" />
        </div>
        <div className="make-appointment-form__end--field">
          <input type="text" className="form-control" value="" />
        </div>
      </div>
      <div className="make-appointment-form__button">
        <button className="btn">Add to schedule</button>
      </div>
    </div>
  );
}

MakeAppointmentForm.propTypes = {

};

export default MakeAppointmentForm;