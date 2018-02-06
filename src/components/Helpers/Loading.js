import React from 'react';
import CircularProgress from 'material-ui/Progress/CircularProgress';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

const styles = {
    container: {
        marginTop: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

const Loading = ({ classes }) => (
    <div className={classes.container}>
        <CircularProgress size={50} />
    </div>
);

Loading.propTypes = {
    classes: PropTypes.shape({
        container: PropTypes.string.isRequired,
    }),
};

export default withStyles(styles)(Loading);
