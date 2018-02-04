import React from 'react';
import BookCard from './BookCard';
import { Grid } from 'material-ui';

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

export default BookCardList;
