import React from 'react';
import PropTypes from 'prop-types';
/**
 * ListViewBody wraps the central section of ListViewItem
 */

const ListViewBody = ({
  children
}) => React.createElement("div", {
  className: "list-view-pf-body"
}, children);

ListViewBody.propTypes = {
  /** Child nodes - ListViewDescription or ListViewAdditionalInfo instances */
  children: PropTypes.node
};
ListViewBody.defaultProps = {
  children: null
};
export default ListViewBody;