import React from 'react';
import { Grid } from 'material-ui';
import PropTypes from 'prop-types';

import BookCard from '../BookCard/BookCard';

const BookCardList = props => {
    const { books } = props;
    return (
        <Grid container spacing={8}>
            {books.map((book, key) => {
                return (
                    <Grid item md={3} sm={6} xs={12} key={key}>
                        <BookCard updateShelf={props.updateShelf} {...book} />
                    </Grid>
                );
            })}
        </Grid>
    );
};

BookCard.propTypes = {
    books: PropTypes.array,
};

export default BookCardList;
