import {
  FETCH_EVENTS,
  LOAD_EVENTS,
  OPEN_MODAL,
  CLOSE_MODAL,
  SELECT_DATE,
  ADD_EVENT,
  DELETE_EVENT,
  FETCH_EVENTS_WITH_TAG
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

function openModal() {
  return {
    type: OPEN_MODAL,
  };
}

function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}

function selectDate(data) {
  return {
    type: SELECT_DATE,
    data
  }
}

function addEvent(data) {
  return {
    type: ADD_EVENT,
    data,
  };
}

function deleteEvent(data) {
  return {
    type: DELETE_EVENT,
    data,
  }
}

function fetchEventsWithTag(data) {
  return {
    type: FETCH_EVENTS_WITH_TAG,
    data,
  }
}

export {
  fetchEvents,
  loadEvents,
  openModal,
  closeModal,
  selectDate,
  addEvent,
  deleteEvent,
  fetchEventsWithTag
};