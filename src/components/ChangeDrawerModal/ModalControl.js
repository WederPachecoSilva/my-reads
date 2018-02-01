import React from 'react';
import Grid from 'material-ui/Grid/Grid';
import BookSelection from './BookSelection';
import Button from './Button';
import withStyles from 'material-ui/styles/withStyles';

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

class ModalControl extends React.Component {
    state = {
        drawer: 'none',
    };

    changeSelectedDrawer(event, value) {
        this.setState({ drawer: value });
    }

    changeDrawer() {}

    render() {
        // @ts-ignore
        const { classes } = this.props;

        return (
            <Grid xs={12} sm={8} md={4} className={classes.modalGrid}>
                <BookSelection
                    drawer={this.state.drawer}
                    changeSelectedDrawer={this.changeSelectedDrawer}
                />
                <Button onClick={this.changeDrawer}>Change</Button>
            </Grid>
        );
    }
}

// @ts-ignore
export default withStyles(styles)(ModalControl);
