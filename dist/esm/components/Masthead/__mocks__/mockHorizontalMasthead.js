function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import classNames from 'classnames';
import { Masthead } from '../index';
import { MenuItem } from '../../MenuItem';
import pfFitBrand from 'storybook/img/brand.svg';
export class MockHorizontalMasthead extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onNavToggleClick", () => {
      this.setState({
        menuCollapsed: !this.state.menuCollapsed
      });
    });

    this.state = {
      menuCollapsed: true
    };
  }

  render() {
    const {
      menuCollapsed
    } = this.state;
    const mobileMenuClasses = classNames({
      'navbar-collapse': true,
      'navbar-collapse-1': true,
      collapse: true,
      in: !menuCollapsed
    });
    return React.createElement(Masthead, {
      titleImg: pfFitBrand,
      title: "Patternfly React",
      navToggle: true,
      thin: true,
      onNavToggleClick: this.onNavToggleClick
    }, React.createElement(Masthead.Collapse, null, React.createElement(Masthead.Dropdown, {
      id: "app-help-dropdown",
      title: React.createElement("span", {
        title: "Help",
        className: "pficon pficon-help"
      }),
      noCaret: true
    }, React.createElement(MenuItem, {
      eventKey: "1"
    }, "Help"), React.createElement(MenuItem, {
      eventKey: "2"
    }, "About")), React.createElement(Masthead.Dropdown, {
      id: "app-user-dropdown",
      title: React.createElement("span", null, React.createElement("span", {
        title: "Help",
        className: "pficon pficon-user"
      }), React.createElement("span", {
        className: "dropdown-title"
      }, " Brian Johnson"))
    }, React.createElement(MenuItem, {
      eventKey: "1"
    }, "User Preferences"), React.createElement(MenuItem, {
      eventKey: "2"
    }, "Logout"))), React.createElement("div", {
      className: mobileMenuClasses
    }, React.createElement("ul", {
      className: "nav navbar-nav navbar-utility"
    }, React.createElement(Masthead.Dropdown, {
      id: "app-help-dropdown",
      title: React.createElement("span", {
        title: "Help",
        className: "pficon pficon-help"
      }),
      noCaret: true
    }, React.createElement(MenuItem, {
      eventKey: "1"
    }, "Help"), React.createElement(MenuItem, {
      eventKey: "2"
    }, "About")), React.createElement(Masthead.Dropdown, {
      id: "app-user-dropdown",
      title: React.createElement("span", null, React.createElement("span", {
        title: "Help",
        className: "pficon pficon-user"
      }), React.createElement("span", {
        className: "dropdown-title"
      }, " Brian Johnson"))
    }, React.createElement(MenuItem, {
      eventKey: "1"
    }, "User Preferences"), React.createElement(MenuItem, {
      eventKey: "2"
    }, "Logout")))));
  }

}
export const mockHorizontalMastheadSource = `
import React from 'react';
import classNames from 'classnames';

import { Masthead } from '../index';
import { MenuItem } from '../../MenuItem';
import pfFitBrand from 'storybook/img/brand.svg';

export class MockHorizontalMasthead extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuCollapsed: true
    };
  }

  onNavToggleClick = () => {
    this.setState({
      menuCollapsed: !this.state.menuCollapsed
    });
  };

  render() {
    const { menuCollapsed } = this.state;

    const mobileMenuClasses = classNames({
      'navbar-collapse': true,
      'navbar-collapse-1': true,
      collapse: true,
      in: !menuCollapsed
    });
    return (
      <Masthead
        titleImg={pfFitBrand}
        title="Patternfly React"
        navToggle
        thin
        onNavToggleClick={this.onNavToggleClick}
      >
        <Masthead.Collapse>
          <Masthead.Dropdown
            id="app-help-dropdown"
            title={<span title="Help" className="pficon pficon-help" />}
            noCaret
          >
            <MenuItem eventKey="1">Help</MenuItem>
            <MenuItem eventKey="2">About</MenuItem>
          </Masthead.Dropdown>
          <Masthead.Dropdown
            id="app-user-dropdown"
            title={
              <span>
                <span title="Help" className="pficon pficon-user" />
                <span className="dropdown-title"> Brian Johnson</span>
              </span>
            }
          >
            <MenuItem eventKey="1">User Preferences</MenuItem>
            <MenuItem eventKey="2">Logout</MenuItem>
          </Masthead.Dropdown>
        </Masthead.Collapse>
        <div className={mobileMenuClasses}>
          <ul className="nav navbar-nav navbar-utility">
            <Masthead.Dropdown
              id="app-help-dropdown"
              title={<span title="Help" className="pficon pficon-help" />}
              noCaret
            >
              <MenuItem eventKey="1">Help</MenuItem>
              <MenuItem eventKey="2">About</MenuItem>
            </Masthead.Dropdown>
            <Masthead.Dropdown
              id="app-user-dropdown"
              title={
                <span>
                  <span title="Help" className="pficon pficon-user" />
                  <span className="dropdown-title"> Brian Johnson</span>
                </span>
              }
            >
              <MenuItem eventKey="1">User Preferences</MenuItem>
              <MenuItem eventKey="2">Logout</MenuItem>
            </Masthead.Dropdown>
          </ul>
        </div>
      </Masthead>
    );
  }
}
`;