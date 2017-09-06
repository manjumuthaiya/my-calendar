import moment from 'moment';

function getMonth(date) {
  return moment(date).format('MMM');
}

function getDate(date) {
  return moment(date).format('DD');
}

function isPastDay(day) {
  return moment(day).startOf('day').isBefore(moment().startOf('day'));
}

function formatDate(date) {
  return moment(date).format('YYYY-MM-DD');
}

export {
  getMonth,
  getDate,
  isPastDay,
  formatDate,
};