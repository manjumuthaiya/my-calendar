import { expect } from 'chai';

import {
  SELECT_DATE,
} from '../../constants/actionTypes';
import calendar from '../../reducers/calendar';

describe('calendar reducer', function () {

  it('sets default initial state', function () {
    expect(calendar(undefined, undefined)).to.deep.equal({ selectedDate: null });
  });

  it('handles SELECT_DATE action', function () {
    const action = {
      type: SELECT_DATE,
      data: new Date(),
    };
    expect(calendar(undefined, action)).to.deep.equal({ selectedDate: action.data });
  });
});