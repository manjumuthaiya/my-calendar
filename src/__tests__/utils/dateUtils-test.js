import { expect } from 'chai';
import moment from 'moment';

import * as dateUtils from '../../utils/dateUtils';

describe('date utils', function () {

  describe('getMonth', function () {
    it('returns the month in MMM format', function () {
      const day = moment(new Date('2014/4/15'));
      expect(dateUtils.getMonth(day)).to.equal('Apr');
    });
  });

  describe('getDate', function () {
    it('returns the date in DD format', function () {
      const day = moment(new Date('2014/4/15'));
      expect(dateUtils.getDate(day)).to.equal('15');
    });
  });

  describe('isPastDay', function () {
    it('returns true if the date is in the past', function () {
      const day = moment(new Date('2014/4/15'));
      expect(dateUtils.isPastDay(day)).to.equal(true);
    });

    it('returns false if the date is today', function () {
      const day = moment();
      expect(dateUtils.isPastDay(day)).to.equal(false);
    });

    it('returns false if the date is in the future', function () {
      const day = moment().add(1, 'day');
      expect(dateUtils.isPastDay(day)).to.equal(false);
    });
  });
});