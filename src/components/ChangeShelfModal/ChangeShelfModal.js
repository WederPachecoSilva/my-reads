import React from 'react';
import { Modal, Grid, withStyles } from 'material-ui';

import BookSelection from './BookSelection';
import { update } from '../../utils/BooksAPI';
import Error from '../ErrorHandling/Error';
import Button from './Button';

const styles = {
    modalGrid: {
        margin: 'auto',
        backgroundColor: '#eee',
        boxShadow: '0 5px 15px #333333',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        border: '4px solid black',
    },
};

class ChangeDrawerModal extends React.Component {
    state = {
        // @ts-ignore
        shelf: this.props.book.shelf || 'none',
        error: false,
    };

    changeSelectedDrawer = event => {
        this.setState({ shelf: event.target.value });
    };

    changeDrawer = async () => {
        // @ts-ignore
        const { book, updateShelf, closeModal } = this.props;
        try {
            await update(book, this.state.shelf);

            // This prop only comes from /home
            if (updateShelf) {
                updateShelf();
            }

            closeModal();
        } catch (error) {
            this.setState({ error: true });
            console.log(error);
        }
    };

    render() {
        // @ts-ignore
        const { isOpen, classes, closeModal } = this.props;
        if (this.state.error) {
            return <Error />;
        }

        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={isOpen}
                disableAutoFocus
            >
                <Grid item xs={9} sm={4} md={2} className={classes.modalGrid}>
                    <BookSelection
                        drawer={this.state.shelf}
                        changeSelectedDrawer={this.changeSelectedDrawer}
                    />
                    <Grid container>
                        <Button onClick={closeModal}>Cancel</Button>
                        <Button onClick={this.changeDrawer}>Change</Button>
                    </Grid>
                </Grid>
            </Modal>
        );
    }
}

// @ts-ignore
export default withStyles(styles)(ChangeDrawerModal);
