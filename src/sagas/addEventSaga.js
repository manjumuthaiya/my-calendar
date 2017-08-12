import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import api from '../api';
import { ADD_EVENT } from '../constants/actionTypes';
import { closeModal, fetchEvents } from '../actions';

export function* addEvent(action) {
  try {
    const events = yield call([api, api.addNewEvent], action.data);

    yield put(closeModal());
    yield put(fetchEvents());
  } catch(err) {
    throw err;
  }
}

export function* watchAddEvent() {
  yield call(takeLatest, ADD_EVENT, addEvent);
}