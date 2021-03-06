"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Timer = _interopRequireDefault(require("../../common/Timer"));

var _helpers = require("../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ModelessOverlay = /*#__PURE__*/function (_React$Component) {
  _inherits(ModelessOverlay, _React$Component);

  function ModelessOverlay(props) {
    var _this;

    _classCallCheck(this, ModelessOverlay);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModelessOverlay).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "updateForTransitions", function () {
      _this.setState({
        isIn: _this.props.show
      });
    });

    _this.state = {
      isIn: false
    };
    _this.inTimer = new _Timer["default"](_this.updateForTransitions, 150);
    return _this;
  }

  _createClass(ModelessOverlay, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.inTimer.clearTimer();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          bsSize = _this$props.bsSize,
          show = _this$props.show,
          otherProps = _objectWithoutProperties(_this$props, ["children", "className", "bsSize", "show"]);

      var isIn = this.state.isIn;
      var classes = (0, _classnames["default"])('modal modeless-pf fade right-side-modal-pf', {
        shown: show || isIn,
        "in": show && isIn
      }, className);

      if (isIn !== show) {
        this.inTimer.clearTimer();
        this.inTimer.startTimer();
      }

      var dialogClasses = (0, _classnames["default"])('modal-dialog', {
        'modal-sm': bsSize === 'sm' || bsSize === 'small',
        'modal-lg': bsSize === 'lg' || bsSize === 'large'
      });
      return _react["default"].createElement("div", _extends({
        role: "dialog",
        tabIndex: -1,
        className: classes
      }, (0, _helpers.excludeKeys)(otherProps, ['show'])), _react["default"].createElement("div", {
        className: dialogClasses
      }, _react["default"].createElement("div", {
        className: "modal-content"
      }, children)));
    }
  }]);

  return ModelessOverlay;
}(_react["default"].Component);

ModelessOverlay.propTypes = {
  /** Children */
  children: _propTypes["default"].node,

  /** Additional css classes */
  className: _propTypes["default"].string,

  /** When true, the dialog is shown */
  show: _propTypes["default"].bool,

  /** Component size variations (effects dialog width). */
  bsSize: _propTypes["default"].oneOf(['lg', 'large', 'sm', 'small', 'default'])
};
ModelessOverlay.defaultProps = {
  children: null,
  className: '',
  show: false,
  bsSize: 'default'
};
var _default = ModelessOverlay;
exports["default"] = _default;