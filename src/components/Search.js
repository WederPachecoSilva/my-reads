import * as React from 'react';
import debounce from 'lodash/debounce';
import { Input, withStyles } from 'material-ui';

import { search } from '../utils/BooksAPI';
// import BookCard from './BookCard';

const styles = {
    searchBar: {
        flex: 0.8,
    },
    container: {
        display: 'flex',
    },
};

const handleSearch = debounce(e => {
    const { value } = e.target;
    search(value).then(res => console.log(res));
}, 1000);

const Search = props => {
    const { classes } = props;
    return (
        <div className={classes.container}>
            <Input
                className={classes.searchBar}
                placeholder="Search for Book"
                onChange={handleSearch}
            />
        </div>
    );
};

export default withStyles(styles)(Search);
