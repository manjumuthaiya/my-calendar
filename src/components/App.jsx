/*
    ./src/components/App.jsx
*/
import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';

import { fetchEvents, fetchEventsWithTag } from '../actions';
import Nav from './Nav';
import Calendar from './Calendar';
import Events from './Events';
import MakeAppointmentButton from './MakeAppointmentButton';
import MakeAppointmentModal from './MakeAppointmentModal';

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  componentWillUpdate(nextProps, nextState) {
    const hash = nextProps.location.hash;
    if (hash !== this.props.location.hash) {
      if (hash) {
        const tag = hash.split('#')[1];
        this.props.fetchEventsWithTag(tag);
      } else {
        this.props.fetchEvents();
      }
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <Calendar />
        <Switch>
          <Route exact path='/' component={Events} onEnter={() => console.log('enter /')}/>
          <Route path='#work' component={Events} onEnter={() => console.log('enter /work')}/>
          <Route path='#personal' component={Events} onEnter={() => console.log('enter /personal')}/>
        </Switch>
        <MakeAppointmentButton />
        <MakeAppointmentModal />
      </div>
    );
  }
}

App.propTypes = {
  fetchEvents: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchEvents,
    fetchEventsWithTag,
  }, dispatch);
}

export default withRouter(connect(
  null,
  mapDispatchToProps
)(App));