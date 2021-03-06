function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../../index';
import { addDays, getWeekStart } from './helpers';
import times from 'lodash/times';

class Header extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "getWeekArray", () => {
      const {
        weekStartsOn
      } = this.props;
      const weekStart = getWeekStart(new Date());
      const dayFormat = Intl.DateTimeFormat(this.props.locale, {
        weekday: 'short'
      }).format(weekStart).length > 3 ? 'narrow' : 'short';
      return times(7, i => Intl.DateTimeFormat(this.props.locale, {
        weekday: dayFormat
      }).format(addDays(weekStart, (i + weekStartsOn) % 7)).slice(0, 2));
    });
  }

  render() {
    const {
      getNextMonth,
      getPrevMonth,
      toggleDateView
    } = this.props;
    const date = new Date(this.props.date);
    const month = Intl.DateTimeFormat(this.props.locale, {
      month: 'long'
    }).format(date);
    const year = date.getFullYear();
    const daysOfTheWeek = this.getWeekArray();
    return React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {
      className: "prev",
      onClick: getPrevMonth
    }, React.createElement(Icon, {
      type: "fa",
      name: "angle-left"
    })), React.createElement("th", {
      className: "picker-switch",
      colSpan: "5",
      onClick: () => toggleDateView('Y')
    }, month, " ", year), React.createElement("th", {
      className: "next",
      onClick: getNextMonth
    }, React.createElement(Icon, {
      type: "fa",
      name: "angle-right"
    }))), React.createElement("tr", null, daysOfTheWeek.map((day, idx) => React.createElement("th", {
      key: idx,
      className: "dow"
    }, day))));
  }

}

Header.propTypes = {
  date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  getPrevMonth: PropTypes.func,
  getNextMonth: PropTypes.func,
  toggleDateView: PropTypes.func,
  locale: PropTypes.string,
  weekStartsOn: PropTypes.number
};
Header.defaultProps = {
  date: new Date(),
  getPrevMonth: null,
  getNextMonth: null,
  toggleDateView: null,
  locale: 'en-US',
  weekStartsOn: 1
};
export default Header;