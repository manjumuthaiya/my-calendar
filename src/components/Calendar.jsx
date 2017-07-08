import React from 'react';
import DayPicker from 'react-day-picker';

function Calendar() {
  return (
    <div className="calendar__container">
      <DayPicker onDayClick={day => alert(day)} />
    </div>
  );
}

Calendar.propTypes = {

};

export default Calendar;