import React from 'react';
import { mount } from 'enzyme';
import { HorizontalNav } from './index';
import { mastheadMock } from './__mocks__/masthead';
import { singleLevel } from './__mocks__/singleLevel';
import { twoLevel } from './__mocks__/twoLevel';
import { dropdownLevel } from './__mocks__/dropdownLevel';
console.warn = jest.fn(() => {}); // eslint-disable-line no-console

test('HorizontalNav renders properly with singleLevel', () => {
  const component = mount(React.createElement(HorizontalNav, null, mastheadMock({
    title: 'Patternfly React',
    navToggle: false,
    thin: true
  }), singleLevel));
  expect(component.render()).toMatchSnapshot();
});
test('HorizontalNav renders properly with two Levels', () => {
  const component = mount(React.createElement(HorizontalNav, null, mastheadMock({
    title: 'Patternfly React',
    navToggle: false,
    thin: true
  }), twoLevel));
  expect(component.render()).toMatchSnapshot();
});
test('HorizontalNav renders properly with dropdown Levels', () => {
  const component = mount(React.createElement(HorizontalNav, null, mastheadMock({
    title: 'Patternfly React',
    navToggle: false,
    thin: true
  }), dropdownLevel));
  expect(component.render()).toMatchSnapshot();
});