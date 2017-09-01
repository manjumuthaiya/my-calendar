import React from 'react';
import chai from 'chai';
import { shallow, mount } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

const expect = chai.expect;
chai.use(chaiEnzyme());

import { App } from '../../components/App';

describe('App', function () {
  let component;
  let fetchEvents;

  beforeEach(function () {
    fetchEvents = sinon.spy();

    component = shallow(
      <App
        fetchEvents={fetchEvents}
      />
    );
  });

  it('renders', function () {
    expect(component).to.be.present();
  });

  it('calls fetchEvents when mounted', function () {
    const store = {
      getState: () => { return {}; },
      subscribe: () => {}
    };
    mount(
      <Provider store={store}>
        <BrowserRouter>
          <App fetchEvents={fetchEvents} />
        </BrowserRouter>
      </Provider>);
    expect(fetchEvents.called).to.equal(true);
  });
});