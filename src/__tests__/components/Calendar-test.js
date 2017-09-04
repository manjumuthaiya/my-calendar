import React from 'react';
import chai from 'chai';
import { shallow, mount } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';

const expect = chai.expect;
chai.use(chaiEnzyme());

import { Calendar } from '../../components/Calendar';

describe('Calendar', () => {
  let component;
  let selectDateSpy;

  beforeEach(() => {
    selectDateSpy = sinon.spy();
    component = shallow(
      <Calendar
        selectDate={selectDateSpy} />
    );
  });

  it('renders a DayPicker', () => {
    expect(component.find('DayPicker')).to.be.present();
  });

  it('passes in the onDayClick prop to DayPicker', () => {
    expect(component.find('DayPicker')).to.have.prop('onDayClick').equal(selectDateSpy);
  });

  it('passes in the selectedDays prop to DayPicker', () => {
    const selectedDate = new Date('2014/5/6');
    component.setProps({
      selectedDate
    });
    expect(component.find('DayPicker')).to.have.prop('selectedDays').equal(selectedDate);
  });

  it('passes in disabledDays and enableOutsideDays by default', () => {
    const dayPicker = component.find('DayPicker');
    expect(dayPicker).to.have.prop('disabledDays').instanceOf(Function);
    expect(dayPicker).to.have.prop('enableOutsideDays').equal(true);
  })
})