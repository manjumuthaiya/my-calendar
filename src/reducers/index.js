import { combineReducers } from 'redux';
import events from './events';
import modal from './modal';
import calendar from './calendar';

export default combineReducers({
  events,
  modal,
  calendar,
});
