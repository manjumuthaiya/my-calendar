import {
  FETCH_EVENTS,
  LOAD_EVENTS,
} from '../constants/actionTypes';

function fetchEvents() {
  return {
    type: FETCH_EVENTS,
  };
}

function loadEvents(data) {
  return {
    type: LOAD_EVENTS,
    data
  };
}

export {
  fetchEvents,
  loadEvents
};