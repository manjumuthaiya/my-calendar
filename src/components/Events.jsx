import React from 'react';
import Event from './Event';

function Events() {
  return (
    <div className="events__container">
      <div className="events__title">
        Upcoming
      </div>
      <div className="events__list">
        <Event />
      </div>
    </div>
  );
}

Events.propTypes = {

};

export default Events;