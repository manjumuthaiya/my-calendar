import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

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

export default MakeAppointmentModal;