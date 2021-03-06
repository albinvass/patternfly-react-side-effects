function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import DualListItem from './DualListItem';
import { noop } from '../../../common/helpers';

const DualListItems = ({
  items,
  filterTerm,
  onChange,
  side
}) => {
  const menuItems = items.map((item, index) => {
    const {
      children
    } = item;
    return React.createElement(React.Fragment, {
      key: `fragment-${index}`
    }, React.createElement(DualListItem, _extends({
      className: children && 'parent'
    }, item, {
      key: `item-${index}`,
      filterTerm: filterTerm,
      onChange: onChange,
      side: side
    })), children && children.map((child, childIndex) => React.createElement(DualListItem, _extends({
      className: "child"
    }, child, {
      key: `${item.label}-child${childIndex}`,
      filterTerm: filterTerm,
      onChange: onChange,
      side: side
    }))));
  });
  return menuItems;
};

DualListItems.propTypes = {
  /** An array of items to create list items elements uppon */
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    children: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    }))
  })),

  /** The term which is flitering the list. */
  filterTerm: PropTypes.string,

  /** A function that is running when the item selected state is toggled. */
  onChange: PropTypes.func,

  /** The side of the selector. */
  side: PropTypes.string
};
DualListItems.defaultProps = {
  items: [],
  filterTerm: null,
  onChange: noop,
  side: null
};
export default DualListItems;