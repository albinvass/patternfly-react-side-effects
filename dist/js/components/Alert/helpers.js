"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClassName = exports.getIconName = exports.warnIfDeprecatedType = void 0;

var _AlertConstants = require("./AlertConstants");

var warnIfDeprecatedType = function warnIfDeprecatedType(type) {
  if (type === _AlertConstants.ALERT_TYPE_DANGER) {
    // eslint-disable-next-line no-console
    console.warn("\n      Warning: Deprecated Alert.type='".concat(_AlertConstants.ALERT_TYPE_DANGER, "'.\n      Please migrate to Alert.type='").concat(_AlertConstants.ALERT_TYPE_ERROR, "'\n    "));
  }
};

exports.warnIfDeprecatedType = warnIfDeprecatedType;

var getIconName = function getIconName(type) {
  switch (type) {
    case _AlertConstants.ALERT_TYPE_DANGER:
    case _AlertConstants.ALERT_TYPE_ERROR:
      return 'error-circle-o';

    case _AlertConstants.ALERT_TYPE_WARNING:
      return 'warning-triangle-o';

    case _AlertConstants.ALERT_TYPE_SUCCESS:
      return 'ok';

    case _AlertConstants.ALERT_TYPE_INFO:
      return 'info';

    default:
      throw new Error("Unsupported alert type=".concat(type));
  }
};

exports.getIconName = getIconName;

var getClassName = function getClassName(type) {
  switch (type) {
    case _AlertConstants.ALERT_TYPE_DANGER:
    case _AlertConstants.ALERT_TYPE_ERROR:
      return 'alert-danger';

    case _AlertConstants.ALERT_TYPE_WARNING:
      return 'alert-warning';

    case _AlertConstants.ALERT_TYPE_SUCCESS:
      return 'alert-success';

    case _AlertConstants.ALERT_TYPE_INFO:
      return 'alert-info';

    default:
      throw new Error("Unsupported alert type=".concat(type));
  }
};

exports.getClassName = getClassName;