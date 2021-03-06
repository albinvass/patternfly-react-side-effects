import React from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger } from '../../OverlayTrigger';
import { Tooltip } from '../../Tooltip';
import { Icon } from '../../Icon';
import { Button } from '../../Button';

const NotificationDrawerToggle = ({
  hasUnreadMessages,
  onClick
}) => {
  const iconName = hasUnreadMessages ? 'bell' : 'bell-o';
  const tooltip = React.createElement(Tooltip, {
    id: "tooltip"
  }, "Notifications");
  return React.createElement(OverlayTrigger, {
    placement: "bottom",
    id: "notifications-toggle-icon",
    overlay: tooltip
  }, React.createElement(Button, {
    onClick: onClick,
    bsStyle: "link",
    className: "nav-item-iconic"
  }, React.createElement(Icon, {
    name: iconName,
    "aria-describedby": "tooltip"
  })));
};

NotificationDrawerToggle.propTypes = {
  /** has Unread Messages Bool */
  hasUnreadMessages: PropTypes.bool,

  /** onClick func */
  onClick: PropTypes.func
};
NotificationDrawerToggle.defaultProps = {
  hasUnreadMessages: true,
  onClick: null
};
export default NotificationDrawerToggle;