import React from 'react';
import BookCard from './BookCard';
import withStyles from 'material-ui/styles/withStyles';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
    },
};

const BookCardList = ({ books, classes }) => (
    <React.Fragment>
        {books.map(book => <BookCard {...book} key={book.id} />)}
    </React.Fragment>
);

export default withStyles(styles)(BookCardList);
