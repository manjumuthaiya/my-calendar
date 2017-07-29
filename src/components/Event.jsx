import React from 'react';
import PropTypes from 'prop-types';

import { getMonth, getDate } from '../utils/dateUtils';

function Event({ event }) {
  console.log("Event", event);
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
        <a href="#"><i className="icon-trash" /></a>
      </div>
      <div className="event__tag">
        <i className="icon-tag" /> {event.tag}
      </div>
    </div>
  );
}

Event.propTypes = {
  event: PropTypes.object
};

export default Event;