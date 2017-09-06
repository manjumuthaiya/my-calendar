import React from 'react';
import chai from 'chai';
import { shallow, mount } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';

const expect = chai.expect;
chai.use(chaiEnzyme());

import { Event } from '../../components/Event';

describe('Event', () => {
  let component;
  let deleteEventSpy;

  beforeEach(() => {
    deleteEventSpy = sinon.spy();
    const event = {
      id: '123abc',
      tag: 'fun',
      title: 'Circus trip',
      time: '5:00 pm',
      date: new Date('2014/5/6'),
      location: 'Toronto',
    };
    component = shallow(
      <Event
        deleteEvent={deleteEventSpy}
        event={event}
      />
    );
  });

  it('renders', () => {
    expect(component).to.be.present();
  });

  it('calls deleteEvent on click of delete button', () => {
    component.find('[data-test-handle="delete-event"]').simulate('click');
    expect(deleteEventSpy.calledWith('123abc')).to.equal(true);
  })
})