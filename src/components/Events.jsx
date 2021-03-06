import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import Event from './Event';

function buildEventNode(event) {
  return (
    <Event
      key={event.id}
      event={event}
    />
  );
}

function buildEventsNodes(events) {
  return _.map(events, (event) => buildEventNode(event));
}

function Events({ events, location}) {
  return (
    <div className="events__container">
      <div className="events__title">
        Upcoming
      </div>
      <div className="events__list">
        { buildEventsNodes(events) }
      </div>
    </div>
  );
}

Events.propTypes = {
  events: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    events: state.events,
  };
}

export default withRouter(connect(
  mapStateToProps
)(Events));