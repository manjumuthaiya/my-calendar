import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import DayPicker from 'react-day-picker';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { isPastDay } from '../utils/dateUtils';

function disableDay(day) {
  return isPastDay(day);
}

function Calendar({ selectDate, selectedDate }) {
  return (
    <div className="calendar__container">
      <DayPicker
        onDayClick={selectDate}
        disabledDays={disableDay}
        selectedDays={selectedDate}
        enableOutsideDays />
    </div>
  );
}

Calendar.propTypes = {
  selectDate: PropTypes.func.isRequired,
  selectedDate: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    selectedDate: _.get(state, 'calendar.selectedDate'),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectDate: actions.selectDate,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);