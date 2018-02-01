import React from 'react';
import Modal from 'material-ui/Modal/Modal';
import ModalControl from './ModalControl';

const ChangeDrawerModal = props => {
    const { isOpen, closeModal } = props;
    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={isOpen}
            onClose={closeModal}
        >
            <ModalControl />
        </Modal>
    );
};

export default ChangeDrawerModal;
