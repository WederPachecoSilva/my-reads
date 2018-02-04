import React from 'react';
import {
    Typography,
    AppBar,
    Toolbar,
    withStyles,
    Button,
    SvgIcon,
} from 'material-ui';
import SearchIcon from 'material-ui-icons/Search';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import If from './../Helpers/If';
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

const HomeIcon = props => (
    <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
);

const Header = ({ classes, location }) => {
    const { root, text, icon, bar } = classes;
    return (
        <div className={root}>
            <AppBar position="static">
                <Toolbar className={bar}>
                    <Typography color="inherit" type="title" className={text}>
                        My-Reads
                    </Typography>
                    <If condition={location.pathname === '/'}>
                        <Button fab color="inherit" className={icon}>
                            <Link to="/search">
                                <SearchIcon />
                            </Link>
                        </Button>
                    </If>
                    <If condition={location.pathname === '/search'}>
                        <Button fab color="inherit" className={icon}>
                            <Link to="/">
                                <HomeIcon />
                            </Link>
                        </Button>
                    </If>
                </Toolbar>
            </AppBar>
        </div>
    );
};

Header.propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string.isRequired,
        bar: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }),
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }),
};

// @ts-ignore
export default withStyles(styles)(withRouter(Header));
