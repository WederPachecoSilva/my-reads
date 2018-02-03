import React from 'react';
import { Typography, AppBar, Toolbar, withStyles, Button } from 'material-ui';
import SearchIcon from 'material-ui-icons/Search';
import { Link } from 'react-router-dom';

import If from './../helpers/If';
import { withRouter } from 'react-router';

const styles = {
    root: {
        width: '100%',
        display: 'flex',
        marginBottom: 20,
    },
    bar: {
        justifyContent: 'space-between',
    },
    text: {
        marginLeft: '10%',
    },
    icon: {
        marginRight: 25,
        width: '3em',
        height: '3em',
        color: 'blue',
    },
};

const Header = ({ classes, match }) => {
    const { root, text, icon, bar } = classes;
    return (
        <div className={root}>
            <AppBar position="static">
                <Toolbar className={bar}>
                    <Typography color="inherit" type="title" className={text}>
                        My-Reads
                    </Typography>
                    <If condition={match.url === '/' && match.isExact}>
                        <Button fab color="inherit" className={icon}>
                            <Link to="/search">
                                <SearchIcon />
                            </Link>
                        </Button>
                    </If>
                </Toolbar>
            </AppBar>
        </div>
    );
};

// @ts-ignore
export default withStyles(styles)(withRouter(Header));
