import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeModal } from '../actions';

function MakeAppointmentModal({ isOpen, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Make appointment"
    >
      Hello modal
      <button onClick={closeModal}>Close</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(MakeAppointmentModal);