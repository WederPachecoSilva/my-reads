import React from 'react';
import Typography from 'material-ui/Typography/Typography';
import AppBar from 'material-ui/AppBar/AppBar';
import Toolbar from 'material-ui/Toolbar/Toolbar';
import withStyles from 'material-ui/styles/withStyles';
import Button from 'material-ui/Button/Button';
import AddIcon from 'material-ui-icons/Add';
import { Link } from 'react-router-dom';

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
        marginLeft: 25,
    },
    icon: {
        marginRight: 25,
        width: '3em',
        height: '3em',
        color: 'blue',
    },
};

// const AddRoute = () => (
//     <Link to={}
// )

const Header = ({ classes }) => {
    const { root, text, icon, bar } = classes;
    return (
        <div className={root}>
            <AppBar position="static">
                <Toolbar className={bar}>
                    <Typography color="inherit" type="title" className={text}>
                        My-Reads
                    </Typography>
                    <Button
                        fab
                        color="inherit"
                        className={icon}
                        onClick={() => alert('ola')}
                    >
                        <AddIcon />
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withStyles(styles)(Header);
