import React, { Component } from 'react';
import { withStyles, TextField, Grid } from 'material-ui';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

import { search } from '../../utils/BooksAPI';
import BookCardList from '../BookCardLists/BookCardList';
import If from './../Helpers/If';
import Error from './../ErrorHandling/Error';
import withErrorBoundary from '../ErrorHandling/withErrorBoundary';

const styles = {
    searchBar: {
        display: 'flex',
        flex: 1,
    },
};

class Search extends Component {
    static propTypes = {
        classes: PropTypes.shape({
            searchBar: PropTypes.string.isRequired,
        }),
    };

    state = {
        books: [],
        hasError: false,
    };

    /**
     * This method returns a debounced function that
     * will only execute after 300 miliseconds after invokation.
     * The debounced function receives a term to be searched,
     * do some checks and treats if there is something wrong.
     * If everything is ok it searchs for all books and then stores
     * them in this.state.books
     */
    debouncedSearch = debounce(async term => {
        let books = [];
        try {
            if (term.length === 0) {
                return this.setState({ books: [] });
            }

            const result = await search(term);

            if (result.error === 'empty query') {
                return this.setState({ books: [] });
            }

            books = result.map(book => {
                const { title, authors, id, imageLinks } = book;
                return !imageLinks
                    ? { title, authors, id, book }
                    : {
                          title,
                          authors,
                          id,
                          imageUrl: imageLinks.thumbnail,
                          book,
                      };
                // if (!imageLinks) {
                //     return { title, authors, id, book };
                // }

                // return {
                //     title,
                //     authors,
                //     id,
                //     imageUrl: imageLinks.thumbnail,
                //     book,
                // };
            });
            this.setState({ books });
        } catch (error) {
            this.setState({ books: [], hasError: true });
        }
    }, 300);

    handleSearch = e => {
        const { value } = e.target;
        this.debouncedSearch(value);
    };

    render() {
        const { books } = this.state;

        const { classes } = this.props;

        if (this.state.hasError) {
            return <Error />;
        }

        return (
            <Grid container direction="column">
                <Grid item md={6} sm={8} xs={11}>
                    <TextField
                        className={classes.searchBar}
                        label="Book"
                        helperText="Search for a book"
                        onChange={this.handleSearch}
                        margin="dense"
                        required
                    />
                </Grid>
                <If condition={books && books.length > 0}>
                    <BookCardList books={books} />
                </If>
            </Grid>
        );
    }
}

export default withErrorBoundary(withStyles(styles)(Search));
