import React from 'react';

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
        <a className="navbar-brand app-logo" href="#">My Calendar <i className="icon-calendar" aria-hidden="true"></i></a>
         <a className="nav-link" href="#">All</a>
          <a className="nav-link" href="#">Work</a>
           <a className="nav-link" href="#">Personal</a>
      </nav>
    );
  }
}

export default Nav;