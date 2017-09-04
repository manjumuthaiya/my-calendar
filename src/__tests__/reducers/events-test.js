import { expect } from 'chai';

import {
  LOAD_EVENTS,
} from '../../constants/actionTypes';
import events from '../../reducers/events';

describe('events reducer', () => {

  it('sets default initial state', () => {
    expect(events(undefined, undefined)).to.deep.equal({});
  });

  it('handles LOAD_EVENTS action', () => {
    const action = {
      type: LOAD_EVENTS,
      data: { foo: 'bar' },
    };
    expect(events(undefined, action)).to.deep.equal(action.data);
  });
});