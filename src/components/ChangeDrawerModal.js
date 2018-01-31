import React from 'react';
import Modal from 'material-ui/Modal/Modal';
import Grid from 'material-ui/Grid/Grid';
import withStyles from 'material-ui/styles/withStyles';
import Button from './Button';
import BookSelection from './BookSelection';

const styles = {
    modalGrid: {
        margin: 'auto',
        backgroundColor: '#fff',
        boxShadow: '0 5px 15px #333333',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
};

const ChangeDrawerModal = props => {
    const { isOpen, closeModal, classes } = props;
    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={isOpen}
            onClose={closeModal}
        >
            <Grid xs={12} sm={8} md={4} className={classes.modalGrid}>
                <BookSelection />
                <Button onClick={closeModal}>Change</Button>
            </Grid>
        </Modal>
    );
};

export default withStyles(styles)(ChangeDrawerModal);
