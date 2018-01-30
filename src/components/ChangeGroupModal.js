import React from 'react';
import Modal from 'material-ui/Modal/Modal';
import Typography from 'material-ui/Typography/Typography';
import Grid from 'material-ui/Grid/Grid';
import withStyles from 'material-ui/styles/withStyles';

const styles = {
    modalGrid: {
        margin: 'auto',
        backgroundColor: '#fff',
        boxShadow: '0 5px 15px #333333',
    },
    button: {
        display: 'flex',
        backgroundColor: 'blue',
        textAlign: 'center',
        fontWeight: 'bold',
        height: 40,
        weight: 50,
        boxShadow: 5,
        borderRadius: 10,
    },
};

const ChangeGroupModal = props => {
    const { isOpen, closeModal, classes } = props;
    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={isOpen}
            onClose={closeModal}
        >
            <Grid xs={12} sm={8} md={4} className={classes.modalGrid}>
                <Typography type="title" id="modal-title">
                    Text in a modal
                </Typography>
                <Typography type="subheading" id="simple-modal-description">
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                </Typography>
                <div className={classes.button} onClick={closeModal}>
                    <p>Add</p>
                </div>
            </Grid>
        </Modal>
    );
};

export default withStyles(styles)(ChangeGroupModal);
