import React from 'react';
import { Modal, Grid, Button, withStyles } from 'material-ui';
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

class ChangeDrawerModal extends React.Component {
    state = {
        drawer: 'none',
    };

    changeSelectedDrawer = event => {
        this.setState({ drawer: event.target.value });
    };

    changeDrawer = () => {
        // @ts-ignore
        this.props.closeModal();
    };

    render() {
        // @ts-ignore
        const { isOpen, classes } = this.props;
        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={isOpen}
            >
                <Grid item xs={12} sm={8} md={4} className={classes.modalGrid}>
                    <BookSelection
                        drawer={this.state.drawer}
                        changeSelectedDrawer={this.changeSelectedDrawer}
                    />
                    <Button onClick={this.changeDrawer}>Change</Button>
                </Grid>
            </Modal>
        );
    }
}

// @ts-ignore
export default withStyles(styles)(ChangeDrawerModal);
