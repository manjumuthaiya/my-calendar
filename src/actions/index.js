import {
  FETCH_EVENTS,
  LOAD_EVENTS,
  OPEN_MODAL,
  CLOSE_MODAL,
  SELECT_DATE,
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

export {
  fetchEvents,
  loadEvents,
  openModal,
  closeModal,
  selectDate,
};