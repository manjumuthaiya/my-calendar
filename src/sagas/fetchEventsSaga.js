import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import api from '../api';
import { FETCH_EVENTS } from '../constants/actionTypes';
import { loadEvents } from '../actions';

export function* fetchEvents() {
  try {
    const events = yield call([api, api.fetchEvents]);

    yield put(loadEvents(events));
  } catch(err) {
    throw err;
  }
}

export function* watchFetchEvents() {
  yield call(takeLatest, FETCH_EVENTS, fetchEvents);
}