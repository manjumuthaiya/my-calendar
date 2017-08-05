import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md bg-faded app__navbar">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand app-logo" to="#">My Calendar <i className="icon-calendar" aria-hidden="true"></i></Link>
          <Link className="nav-link" to="/">All</Link>
          <Link className="nav-link" to="/work">Work</Link>
          <Link className="nav-link" to="/personal">Personal</Link>
      </nav>
    );
  }
}

export default Nav;