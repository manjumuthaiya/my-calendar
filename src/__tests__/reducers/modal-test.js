import { expect } from 'chai';

import {
  OPEN_MODAL,
  CLOSE_MODAL,
} from '../../constants/actionTypes';
import modal from '../../reducers/modal';

describe('modal reducer', () => {

  it('sets default initial state', () => {
    expect(modal(undefined, undefined)).to.deep.equal({ isOpen: false });
  });

  it('handles OPEN_MODAL action', () => {
    const action = {
      type: OPEN_MODAL,
    };
    expect(modal(undefined, action)).to.deep.equal({ isOpen: true });
  });

  it('handles CLOSE_MODAL action', () => {
    const action = {
      type: CLOSE_MODAL,
    };
    const state = { isOpen: true };
    expect(modal(state, action)).to.deep.equal({ isOpen: false });
  });
});