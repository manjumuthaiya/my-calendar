import moment from 'moment';

function getMonth(date) {
  return moment(date).format('MMM');
}

function getDate(date) {
  return moment(date).format('DD');
}

export {
  getMonth,
  getDate,
};