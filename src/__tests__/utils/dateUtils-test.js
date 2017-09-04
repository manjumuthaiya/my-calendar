import { expect } from 'chai';
import moment from 'moment';

import * as dateUtils from '../../utils/dateUtils';

describe('date utils', () => {

  describe('getMonth', () => {
    it('returns the month in MMM format', () => {
      const day = moment(new Date('2014/4/15'));
      expect(dateUtils.getMonth(day)).to.equal('Apr');
    });
  });

  describe('getDate', () => {
    it('returns the date in DD format', () => {
      const day = moment(new Date('2014/4/15'));
      expect(dateUtils.getDate(day)).to.equal('15');
    });
  });

  describe('isPastDay', () => {
    it('returns true if the date is in the past', () => {
      const day = moment(new Date('2014/4/15'));
      expect(dateUtils.isPastDay(day)).to.equal(true);
    });

    it('returns false if the date is today', () => {
      expect(dateUtils.isPastDay(moment())).to.equal(false);
    });

    it('returns false if the date is in the future', () => {
      const day = moment().add(1, 'day');
      expect(dateUtils.isPastDay(day)).to.equal(false);
    });
  });

  describe('formatDate', () => {
    it('returns formatted date string', () => {
      const date = moment(new Date('2014/4/15'));
      expect(dateUtils.formatDate(date)).to.equal('2014-04-15');
    });
  });
});