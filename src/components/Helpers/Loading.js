import React from 'react';
import CircularProgress from 'material-ui/Progress/CircularProgress';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

const styles = {
    progress: {},
    container: {
        marginTop: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

const Loading = ({ classes }) => (
    <div className={classes.container}>
        <CircularProgress className={classes.progress} size={50} />
    </div>
);

Loading.propTypes = {
    classes: PropTypes.shape({
        progress: PropTypes.string.isRequired,
        container: PropTypes.string.isRequired,
    }),
};

export default withStyles(styles)(Loading);
