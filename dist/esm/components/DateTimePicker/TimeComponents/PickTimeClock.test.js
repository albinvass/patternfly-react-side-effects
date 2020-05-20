import React from 'react';
import { mount, shallow } from 'enzyme';
import PickTimeClock from './PickTimeClock';
import { AM, PM, HOUR, MINUTE } from './TimeConstants';
test('PickTimeClock is working properly', () => {
  const time = new Date('2/21/2019, 2:22:31 PM');
  const component = shallow(React.createElement(PickTimeClock, {
    time: time
  }));
  expect(component.render()).toMatchSnapshot();
});
test('Edit minutes of PickTimeClock', () => {
  const time = new Date('2/21/2019, 2:22:31 PM');
  const setSelected = jest.fn();
  const component = mount(React.createElement(PickTimeClock, {
    time: time,
    setSelected: setSelected
  }));
  expect(component.render()).toMatchSnapshot();
  component.find('[title~="Minute"][title~="Increment"]').simulate('click');
  expect(setSelected).toBeCalledWith(new Date('2/21/2019, 2:23:31 PM'));
  component.find('[title~="Minute"][title~="Decrement"]').simulate('click');
  component.find('[title~="Minute"][title~="Decrement"]').simulate('click');
  expect(setSelected).toBeCalledWith(new Date('2/21/2019, 2:21:31 PM'));
});
test('Edit hours of PickTimeClock', () => {
  const time = new Date('2/21/2019, 2:22:31 PM');
  const setSelected = jest.fn();
  const component = mount(React.createElement(PickTimeClock, {
    time: time,
    setSelected: setSelected
  }));
  expect(component.render()).toMatchSnapshot();
  component.find('[title~="Hour"][title~="Increment"]').simulate('click');
  expect(setSelected).toBeCalledWith(new Date('2/21/2019, 3:22:31 PM'));
  component.find('[title~="Hour"][title~="Decrement"]').simulate('click');
  component.find('[title~="Hour"][title~="Decrement"]').simulate('click');
  expect(setSelected).toBeCalledWith(new Date('2/21/2019, 1:22:31 PM'));
});
test('Toggle hours of PickTimeClock', () => {
  const time = new Date('2/21/2019, 12:22:31 PM');
  const component = mount(React.createElement(PickTimeClock, {
    time: time
  }));
  expect(component.state().ampm).toEqual(PM);
  component.find('.ampm-toggle').simulate('click');
  expect(component.state().ampm).toEqual(AM);
  expect(component.render()).toMatchSnapshot();
  component.find('.ampm-toggle').simulate('click');
  expect(component.state().ampm).toEqual(PM);
});
test('Toggle TimeTable hour from PickTimeClock', () => {
  const time = new Date('2/21/2019, 12:22:31 PM');
  const toggleTimeTable = jest.fn();
  const component = mount(React.createElement(PickTimeClock, {
    time: time,
    toggleTimeTable: toggleTimeTable
  }));
  component.find('.timepicker-hour').simulate('click');
  expect(toggleTimeTable).toBeCalledWith(HOUR);
});
test('Toggle TimeTable minute from PickTimeClock', () => {
  const time = new Date('2/21/2019, 12:22:31 PM');
  const toggleTimeTable = jest.fn();
  const component = mount(React.createElement(PickTimeClock, {
    time: time,
    toggleTimeTable: toggleTimeTable
  }));
  component.find('.timepicker-minute').simulate('click');
  expect(toggleTimeTable).toBeCalledWith(MINUTE);
});