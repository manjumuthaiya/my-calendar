import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDtIHe2AI_ntAUCJaZjXqqGIWa0PWJZwwo",
  authDomain: "my-calendar-89f0a.firebaseapp.com",
  databaseURL: "https://my-calendar-89f0a.firebaseio.com",
  projectId: "my-calendar-89f0a",
  storageBucket: "",
  messagingSenderId: "226719993552"
};
firebase.initializeApp(config);
const database = firebase.database();


function addNewEvent(item) {
  const newItemRef = database.ref('events').push();
  return newItemRef.set(item);
}

export default {
  addNewEvent,
};