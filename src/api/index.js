import firebase from 'firebase';
import { call } from 'redux-saga/effects';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD6Upq75dEfvtQURDoY3Qm-mgFnzYLBFSc",
  authDomain: "my-calendar-cc702.firebaseapp.com",
  databaseURL: "https://my-calendar-cc702.firebaseio.com",
  projectId: "my-calendar-cc702",
  storageBucket: "",
  messagingSenderId: "207120885576"
};
firebase.initializeApp(config);
const database = firebase.database();


function addNewEvent(item) {
  const newItemRef = database.ref('events').push();
  return newItemRef.set({
    ...item,
    id: newItemRef.key,
  });
}

function* deleteEvent(id) {
  const eventRef = database.ref(`events/${id}`);
  yield call([eventRef, eventRef.remove]);
}

function* fetchEvents() {
  const ref = database.ref('events');
  const data = yield call([ref, ref.once], 'value');
  return data.val();
}

function* fetchEventsWithTag(tag) {
  let ref = database.ref('events');
  ref = ref.orderByChild('tag').equalTo(tag);
  const data = yield call([ref, ref.once], 'value');
  return data.val();
}

export default {
  addNewEvent,
  fetchEvents,
  deleteEvent,
  fetchEventsWithTag,
};