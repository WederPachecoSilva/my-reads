import React from 'react';
import { Modal, Grid, Button, withStyles } from 'material-ui';
import BookSelection from './BookSelection';
import { update, getAll } from '../../utils/BooksAPI';
import Error from '../ErrorHandling/Error';

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
        error: false,
    };

    changeSelectedDrawer = event => {
        this.setState({ drawer: event.target.value });
    };
    changeDrawer = async () => {
        try {
            const res = await getAll();
            console.log(res);
            // @ts-ignore
            await update(this.props.book, this.state.drawer);

            // @ts-ignore
            this.props.closeModal();
        } catch (error) {
            this.setState({ error: true });
        }
    };

    render() {
        // @ts-ignore
        const { isOpen, classes } = this.props;
        if (this.state.error) {
            return <Error />;
        }

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
