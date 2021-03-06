import React from 'react';
import { shallow } from 'enzyme';
import { SessionTimeout } from './index';
import { MessageDialog } from '../../index';

const noop = () => {};

test('SessionTimeout render session timeout message dialog', () => {
  const component = shallow(React.createElement(SessionTimeout, {
    logoutFnc: noop,
    continueFnc: noop,
    timeLeft: 10,
    displayBefore: 20,
    continueContent: "continue button",
    logoutContent: "logout button",
    primaryContent: React.createElement("div", null, "Session Timeout"),
    secondaryContent: React.createElement("div", null, "This session is about to be terminated in 3..2..1..")
  }));
  expect(component).toMatchSnapshot();
});
test('SessionTimeout hidden when timeLeft bigger than displayBefore', () => {
  const component = shallow(React.createElement(SessionTimeout, {
    logoutFnc: noop,
    continueFnc: noop,
    displayBefore: 10,
    timeLeft: 11
  }));
  expect(component.find(MessageDialog).prop('show')).toBe(false);
});
test('SessionTimeout displayed when timeLeft not bigger than displayBefore', () => {
  const component = shallow(React.createElement(SessionTimeout, {
    logoutFnc: noop,
    continueFnc: noop,
    displayBefore: 10,
    timeLeft: 10
  }));
  expect(component.find(MessageDialog).prop('show')).toBe(true);
});