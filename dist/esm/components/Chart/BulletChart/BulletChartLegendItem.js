function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { OverlayTrigger } from '../../OverlayTrigger/index';
import { Tooltip } from '../../Tooltip/index';

const randomId = () => Date.now();

const BulletChartLegendItem = (_ref) => {
  let {
    className,
    title,
    value,
    color,
    boxClassName,
    tooltipFunction,
    tooltipId
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "title", "value", "color", "boxClassName", "tooltipFunction", "tooltipId"]);

  const classes = classNames('bullet-chart-pf-legend-item', className);
  const boxClasses = classNames('bullet-chart-pf-legend-item-box', boxClassName);

  const TooltipFunction = () => {
    if (tooltipFunction) {
      return tooltipFunction(title, value, color);
    }

    return React.createElement(Tooltip, {
      id: tooltipId || randomId()
    }, `${title}: ${value}%`);
  };

  return React.createElement(OverlayTrigger, _extends({
    overlay: TooltipFunction(title, value, color),
    placement: "top",
    trigger: ['hover', 'focus'],
    rootClose: false
  }, props), React.createElement("span", {
    className: classes
  }, React.createElement("span", {
    className: boxClasses,
    style: {
      backgroundColor: color
    }
  }), React.createElement("span", {
    className: "bullet-chart-pf-legend-item-text"
  }, title)));
};

BulletChartLegendItem.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,

  /** Text for the legend item */
  title: PropTypes.string,

  /* Value of the item */
  value: PropTypes.number,

  /* Color for the box */
  color: PropTypes.string,

  /** Additional css classes for the box */
  boxClassName: PropTypes.string,

  /** Tooltip function(title, value, color) to render tooltip contents */
  tooltipFunction: PropTypes.func,

  /** Tooltip ID */
  tooltipId: PropTypes.string
};
BulletChartLegendItem.defaultProps = {
  className: '',
  title: '',
  value: 0,
  color: undefined,
  boxClassName: '',
  tooltipFunction: undefined,
  tooltipId: undefined
};
export default BulletChartLegendItem;