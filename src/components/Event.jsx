import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { getMonth, getDate } from '../utils/dateUtils';
import * as actions from '../actions';


export function Event({ event, deleteEvent }) {
  function onDeleteClick() {
    deleteEvent(event.id);
  }
  return (
    <div className="event__container">
      <div className="event__date">
        <div className="event__date--month">{ getMonth(event.date) }</div>
        <div className="event__date--day">{ getDate(event.date) }</div>
      </div>
      <div className="event__body">
        <div className="event__title">
          {event.title}
        </div>
        <div className="event__details">
          <span className="event__details--time">{event.time}&nbsp;</span>
          <span className="event__details--location">@ {event.location}</span>
        </div>
      </div>
      <div className="event__delete-button">
        <button onClick={onDeleteClick} className="icon-trash" ></button>
      </div>
      <div className="event__tag">
        <i className="icon-tag" /> {event.tag}
      </div>
    </div>
  );
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
  deleteEvent: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteEvent: actions.deleteEvent,
  }, dispatch);
}
export default withRouter(connect(null, mapDispatchToProps)(Event));