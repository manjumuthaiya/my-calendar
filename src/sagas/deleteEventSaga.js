import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import api from '../api';
import { DELETE_EVENT } from '../constants/actionTypes';
import { closeModal, fetchEvents } from '../actions';

export function* deleteEvent(action) {
  try {
    console.log("Going to call api", action)
    const events = yield call([api, api.deleteEvent], action.data);

    yield put(fetchEvents());
  } catch(err) {
    throw err;
  }
}

export function* watchDeleteEvent() {
  yield call(takeLatest, DELETE_EVENT, deleteEvent);
}