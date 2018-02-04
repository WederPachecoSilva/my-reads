import React from 'react';
import CircularProgress from 'material-ui/Progress/CircularProgress';
import { withStyles } from 'material-ui/styles';

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

export default withStyles(styles)(Loading);
