import React, { Component } from 'react';
import withStyles from 'material-ui/styles/withStyles';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

import { search } from '../utils/BooksAPI';
import BookCardList from './BookCardList';
import If from './helpers/If';
import TextField from 'material-ui/TextField/TextField';
import Grid from 'material-ui/Grid/Grid';

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
        input: '',
    };

    doSearch = debounce(async term => {
        let books = [];
        try {
            if (term.length === 0) {
                this.setState({ books: [] });
                return;
            }

            const result = await search(term);
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
    }, 300);

    handleSearch = e => {
        const { value } = e.target;
        this.doSearch(value);
    };

    render() {
        // @ts-ignore
        const { books } = this.state;
        // @ts-ignore
        const { classes } = this.props;

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

// @ts-ignore
export default withStyles(styles)(Search);
