import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

export class MakeAppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      title: '',
      tag: 'work',
      location: '',
      startTime: '',
      endTime: '',
    };
    this.createHandleChange = this.createHandleChange.bind(this);
    this.addToSchedule = this.addToSchedule.bind(this);
  }

  createHandleChange(field) {
    return (changeEvent) => {
      this.setState({
        [field]: changeEvent.target.value,
      });
    }
  }

  getTimeField() {
    if (this.state.endTime) {
      return `${this.state.startTime} to ${this.state.endTime}`;
    }
    return this.state.startTime;
  }

  addToSchedule() {
    const data = {
      date: this.state.date,
      title: this.state.title,
      tag: this.state.tag,
      location: this.state.location,
      time: this.getTimeField(),
    };
    this.props.addEvent(data);
  }

  render() {
    const handleDateChange = this.createHandleChange('date');
    const handleTitleChange = this.createHandleChange('title');
    const handleTagChange = this.createHandleChange('tag');
    const handleLocationChange = this.createHandleChange('location');
    const handleStartTimeChange = this.createHandleChange('startTime');
    const handleEndTimeChange = this.createHandleChange('endTime');

    return (
      <div className="make-appointment-form__container">
        <div className="make-appointment-form__label">
          When is it?
        </div>
        <div className="make-appointment-form__field">
          <input
            type="text"
            className="form-control"
            value={this.state.date}
            onChange={handleDateChange}/>
        </div>
        <div className="make-appointment-form__label">
          What is it?
        </div>
        <div className="make-appointment-form__field--what">
          <input
            type="text"
            className="form-control"
            value={this.state.eventTitle}
            onChange={handleTitleChange} />
          <select
            className="form-control"
            value={this.state.eventTag}
            onChange={handleTagChange}>
              <option value="work">Work</option>
              <option value="personal">Personal</option>
          </select>
        </div>
        <div className="make-appointment-form__label">
          Where is it?
        </div>
        <div className="make-appointment-form__field--where">
          <input
            type="text"
            className="form-control"
            value={this.state.location}
            onChange={handleLocationChange} />
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
            <input
              type="text"
              className="form-control"
              value={this.state.startTime}
              onChange={handleStartTimeChange}/>
          </div>
          <div className="make-appointment-form__end--field">
            <input
              type="text"
              className="form-control"
              value={this.state.endTime}
              onChange={handleEndTimeChange} />
          </div>
        </div>
        <div className="make-appointment-form__button">
          <button className="btn" onClick={this.addToSchedule}>Add to schedule</button>
        </div>
      </div>
    );
  }
}

MakeAppointmentForm.propTypes = {
  selectedDate: PropTypes.string,
  addEvent: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    selectedDate: _.get(state, 'calendar.selectedDate'),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addEvent: actions.addEvent,
  }, dispatch);
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MakeAppointmentForm));