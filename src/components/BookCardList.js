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
    <div className={classes.container}>
        {books.map(({ title, authors, id, imageUrl }) => (
            <BookCard
                key={id}
                title={title}
                authors={authors}
                imageUrl={imageUrl}
            />
        ))}
    </div>
);

export default withStyles(styles)(BookCardList);
