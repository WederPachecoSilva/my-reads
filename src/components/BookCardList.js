import React from 'react';
import BookCard from './BookCard';
import Grid from 'material-ui/Grid/Grid';

const BookCardList = ({ books, classes }) => (
    <Grid container spacing={8}>
        {books.map(book => {
            return (
                <Grid item md={3} sm={6} xs={12} key={book.id}>
                    <BookCard {...book} />
                </Grid>
            );
        })}
    </Grid>
);

export default BookCardList;
