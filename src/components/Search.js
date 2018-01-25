import React, { Component } from 'react';
import { Input, withStyles } from 'material-ui';

import { search } from '../utils/BooksAPI';
import { center } from '../utils/cssGlobalVariables';
import PropTypes from 'prop-types';
import BookCardList from './BookCardList';
import If from './helpers/If';

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
    static propTypes = {
        classes: PropTypes.shape({
            container: PropTypes.string.isRequired,
            searchBar: PropTypes.string.isRequired,
        }),
    };

    state = {
        books: [],
    };

    handleFilter = async e => {
        const { value } = e.target;
        let books = [];
        try {
            const result = await search(value);
            books = result.map(book => {
                const { title, authors, id, imageLinks } = book;
                return {
                    title,
                    authors,
                    id,
                    imageUrl: imageLinks.thumbnail,
                };
            });
            if (books.length > 0) {
                this.setState({ books });
            }
        } catch (error) {
            this.setState({ books: [] });
        }
    };

    render() {
        // @ts-ignore
        const { books } = this.state;
        // @ts-ignore
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <Input
                    className={classes.searchBar}
                    placeholder="Search for Book"
                    onChange={this.handleFilter}
                />
                <If condition={books && books.length > 0}>
                    <BookCardList books={books} />
                </If>
            </div>
        );
    }
}

// @ts-ignore
export default withStyles(styles)(Search);
