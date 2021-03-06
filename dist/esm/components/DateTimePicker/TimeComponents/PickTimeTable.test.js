import React from 'react';
import { mount } from 'enzyme';
import PickTimeTable from './PickTimeTable';
import { HOUR, MINUTE } from './TimeConstants';
test('PickTimeTable is working properly for Minute', () => {
  const time = new Date('2019-01-04 14:22:31');
  const setSelected = jest.fn();
  const component = mount(React.createElement(PickTimeTable, {
    time: time,
    type: MINUTE,
    setSelected: setSelected
  }));
  expect(component.render()).toMatchSnapshot();
  component.find('.minute').first().simulate('click');
  expect(setSelected).toBeCalledWith(new Date('2019-01-04 14:00:31'));
});
test('PickTimeTable is working properly for Hour', () => {
  const time = new Date('2019-01-04 14:22:31');
  const setSelected = jest.fn();
  const component = mount(React.createElement(PickTimeTable, {
    time: time,
    type: HOUR,
    setSelected: setSelected
  }));
  expect(component.render()).toMatchSnapshot();
  component.find('.hour').first().simulate('click');
  expect(setSelected).toBeCalledWith(new Date('2019-01-04 12:22:31'));
});