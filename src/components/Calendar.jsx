import React from 'react';
import PropTypes from 'prop-types';

import DayPicker from 'react-day-picker';

function Calendar() {
  return (
    <div className="calendar__container">
      <DayPicker onDayClick={day => day} />
    </div>
  );
}

Calendar.propTypes = {

};

export default Calendar;