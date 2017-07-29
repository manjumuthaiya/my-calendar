import { expect } from 'chai';

import {
  LOAD_EVENTS,
} from '../../constants/actionTypes';
import events from '../../reducers/events';

describe('events reducer', function () {

  it('sets default initial state', function () {
    expect(events(undefined, undefined)).to.deep.equal({});
  });

  it('handles LOAD_EVENTS action', function () {
    const action = {
      type: LOAD_EVENTS,
      data: { foo: 'bar' },
    };
    expect(events(undefined, action)).to.deep.equal(action.data);
  });
});