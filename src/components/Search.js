import React, { Component } from 'react';
// import debounce from 'lodash/debounce';
import { Input, withStyles } from 'material-ui';

import { search } from '../utils/BooksAPI';
import Header from './Header';
import { center } from '../utils/cssGlobalVariables';
// import BookCard from './BookCard';
import PropTypes from 'prop-types';
import BookCardList from './BookCardList';
// import If from './helpers/If';

const styles = {
    searchBar: {
        width: '80%',
        ...center,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
};

class Search extends Component {
    state = {
        books: [],
    };

    handleFilter = async e => {
        try {
            const { value } = e.target;
            const result = await search(value);
            const books = result.map(book => {
                const { title, authors, id, imageLinks } = book;
                return {
                    title,
                    authors,
                    id,
                    imageUrl: imageLinks.thumbnail,
                };
            });
            this.setState({ books });
        } catch (error) {}
    };

    render() {
        // @ts-ignore
        const { books } = this.state;
        // @ts-ignore
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <Header />
                <Input
                    className={classes.searchBar}
                    placeholder="Search for Book"
                    onKeyUp={this.handleFilter}
                />
                {books.length > 0 && <BookCardList books={books} />}
            </div>
        );
    }
}

Search.propTypes = {
    classes: PropTypes.shape({
        container: PropTypes.string.isRequired,
        searchBar: PropTypes.string.isRequired,
    }),
};

// @ts-ignore
export default withStyles(styles)(Search);
