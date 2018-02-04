import React from 'react';
import { Modal, Grid, withStyles } from 'material-ui';
import PropTypes from 'prop-types';

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
    static propTypes = {
        book: PropTypes.shape({
            shelf: PropTypes.string,
        }),
        updateShelf: PropTypes.func,
        closeModal: PropTypes.func.isRequired,
        isOpen: PropTypes.bool.isRequired,
        classes: PropTypes.shape({
            modalGrid: PropTypes.string.isRequired,
        }),
    };

    state = {
        shelf: this.props.book.shelf || 'none',
        error: false,
    };

    changeSelectedShelf = event => {
        this.setState({ shelf: event.target.value });
    };

    changeShelf = async () => {
        const { book, updateShelf, closeModal } = this.props;
        try {
            await update(book, this.state.shelf);

            /**
             * This prop only comes from /home
             * It is used to update instantly
             * if a book changes its shelf
             */
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
        const { isOpen, classes, closeModal } = this.props;
        const { error, shelf } = this.state;
        if (error) {
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
                        drawer={shelf}
                        changeSelectedShelf={this.changeSelectedShelf}
                    />
                    <Grid container justify="space-around">
                        <Button onClick={closeModal}>Cancel</Button>
                        <Button onClick={this.changeShelf}>Change</Button>
                    </Grid>
                </Grid>
            </Modal>
        );
    }
}

export default withStyles(styles)(ChangeDrawerModal);
