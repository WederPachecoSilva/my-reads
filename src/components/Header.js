import React from 'react';
import Typography from 'material-ui/Typography/Typography';
import AppBar from 'material-ui/AppBar/AppBar';
import Toolbar from 'material-ui/Toolbar/Toolbar';
import withStyles from 'material-ui/styles/withStyles';

const styles = {
    root: {
        width: '100%',
    },
};

const Header = ({ classes }) => {
    const { root, text } = classes;
    return (
        <div className={root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography color="inherit" type="title" className={text}>
                        My-Reads
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withStyles(styles)(Header);
