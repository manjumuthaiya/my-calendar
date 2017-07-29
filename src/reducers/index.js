import { combineReducers } from 'redux';
import events from './events';
import modal from './modal';

export default combineReducers({
  events,
  modal,
});
