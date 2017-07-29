import moment from 'moment';

function getMonth(date) {
  return moment(date).format('MMM');
}

function getDate(date) {
  return moment(date).format('DD');
}

function isPastDay(day) {
  return moment(day).isBefore(moment());
}

export {
  getMonth,
  getDate,
  isPastDay,
};