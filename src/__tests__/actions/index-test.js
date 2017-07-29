import { expect } from 'chai';
import * as actions from '../../actions';
import {
  FETCH_EVENTS,
  LOAD_EVENTS,
  OPEN_MODAL,
  CLOSE_MODAL,
  SELECT_DATE,
} from '../../constants/actionTypes';

describe('actions', function () {

  describe('fetchEvents', function () {
    it('returns an action object for fetching events', function () {
      const expected = {
        type: FETCH_EVENTS,
      };
      expect(actions.fetchEvents()).to.deep.equal(expected);
    });
  });

  describe('loadEvents', function () {
    it('returns an action object for loading events', function () {
      const data = { foo: 'bar' };
      const expected = {
        type: LOAD_EVENTS,
        data,
      };
      expect(actions.loadEvents(data)).to.deep.equal(expected);
    });
  });

  describe('openModal', function () {
    it('returns an action object for opening modal', function () {
      const expected = {
        type: OPEN_MODAL,
      };
      expect(actions.openModal()).to.deep.equal(expected);
    });
  });

  describe('closeModal', function () {
    it('returns an action object for closing modal', function () {
      const expected = {
        type: CLOSE_MODAL,
      };
      expect(actions.closeModal()).to.deep.equal(expected);
    });
  });

  describe('selectDate', function () {
    it('returns an action object for selecting date', function () {
      const data = '2017/8/9';
      const expected = {
        type: SELECT_DATE,
        data,
      };
      expect(actions.selectDate(data)).to.deep.equal(expected);
    });
  });
});