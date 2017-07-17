import React, { PropTypes } from 'react';

function Event({ event }) {
  console.log("Event", event);
  return (
    <div className="event__container">
      <div className="event__date">
        <div className="event__date--month">JUL</div>
        <div className="event__date--day">28</div>
      </div>
      <div className="event__body">
        <div className="event__title">
          Leadership seminar by Ted Tonks
        </div>
        <div className="event__details">
          <span className="event__details--time">9:00 am to 3:00 pm</span>
          <span className="event__details--location">@ EXPO center</span>
        </div>
      </div>
      <div className="event__delete-button">
        <a href="#"><i className="icon-trash" /></a>
      </div>
      <div className="event__tag">
        <i className="icon-tag" /> Work
      </div>
    </div>
  );
}

Event.propTypes = {
  event: PropTypes.object
};

export default Event;