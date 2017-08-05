import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeModal } from '../actions';
import MakeAppointmentForm from './MakeAppointmentForm';

function MakeAppointmentModal({ isOpen, closeModal }) {
  const styles = {
    content: {
      borderRadius: '15px',
      width: '50%',
      margin: '0 auto',
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Make appointment"
      style={styles}
    >
      <button onClick={closeModal} className="icon-close pull-right"></button>
      <MakeAppointmentForm />
    </Modal>
  );
}

MakeAppointmentModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isOpen: _.get(state, 'modal.isOpen'),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    closeModal,
  }, dispatch);
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MakeAppointmentModal));