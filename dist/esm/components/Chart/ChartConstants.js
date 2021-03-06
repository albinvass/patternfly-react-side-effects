function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import { compose, setDisplayName, mapProps, defaultProps, setPropTypes } from 'recompose';
import C3Chart from 'react-c3js';
import { c3ChartDefaults } from '../../common/patternfly';
/**
 * Chart defaults
 */

const CHART_CONFIG = {
  AREA_CHART: {
    type: 'area',
    displayName: 'AreaChart',
    className: 'area-chart-pf',
    defaultConfig: c3ChartDefaults.getDefaultAreaConfig()
  },
  BAR_CHART: {
    type: 'bar',
    displayName: 'BarChart',
    className: 'bar-chart-pf',
    defaultConfig: c3ChartDefaults.getDefaultBarConfig()
  },
  DONUT_CHART: {
    type: 'donut',
    displayName: 'DonutChart',
    className: 'donut-chart-pf',
    defaultConfig: c3ChartDefaults.getDefaultDonutConfig()
  },
  GROUPED_BAR_CHART: {
    type: 'bar',
    displayName: 'GroupedBarChart',
    className: 'bar-chart-pf',
    defaultConfig: c3ChartDefaults.getDefaultGroupedBarConfig()
  },
  LINE_CHART: {
    type: 'line',
    displayName: 'LineChart',
    className: 'line-chart-pf',
    defaultConfig: c3ChartDefaults.getDefaultLineConfig()
  },
  PIE_CHART: {
    type: 'pie',
    displayName: 'PieChart',
    className: 'pie-chart-pf',
    defaultConfig: c3ChartDefaults.getDefaultPieConfig()
  },
  SINGLE_AREA_CHART: {
    type: 'area',
    displayName: 'SingleAreaChart',
    className: 'area-chart-pf',
    defaultConfig: c3ChartDefaults.getDefaultSingleAreaConfig()
  },
  SINGLE_LINE_CHART: {
    type: 'line',
    displayName: 'SingleLineChart',
    className: 'line-chart-pf',
    defaultConfig: c3ChartDefaults.getDefaultSingleLineConfig()
  },
  SPARKLINE_CHART: {
    type: 'area',
    displayName: 'SparklineChart',
    className: 'chart-pf-sparkline',
    defaultConfig: c3ChartDefaults.getDefaultSparklineConfig()
  },
  STACKED_BAR_CHART: {
    type: 'bar',
    displayName: 'StackedBarChart',
    className: 'bar-chart-pf',
    defaultConfig: c3ChartDefaults.getDefaultStackedBarConfig()
  }
};
/**
 * Helper functions
 */

const mapChartProps = (name, props) => {
  const newProps = Object.assign({}, props); // Set chart type

  if (props.data && !props.data.type) {
    newProps.data.type = props.type;
  }

  return newProps;
};

const getComposer = name => {
  const config = CHART_CONFIG[name];
  return compose(setDisplayName(config.displayName), setPropTypes(_objectSpread({
    data: PropTypes.object.isRequired
  }, C3Chart.propTypes)), defaultProps(_objectSpread({
    type: config.type,
    className: config.className
  }, config.defaultConfig)), mapProps(props => mapChartProps(name, props)));
};
/**
 * Exports functions
 */


export { getComposer, CHART_CONFIG };