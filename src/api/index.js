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
  console.log("add new event called", item)
  const newItemRef = database.ref('events').push();
  return newItemRef.set({
    ...item,
    id: newItemRef.key,
  });
}

function* fetchEvents() {
  const ref = database.ref('events');
  const data = yield call([ref, ref.once], 'value');
  return data.val();
}

export default {
  addNewEvent,
  fetchEvents,
};