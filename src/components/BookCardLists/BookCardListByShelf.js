import React from 'react';

import { getAll } from '../../utils/BooksAPI';
import BookCardList from './BookCardList';
import If from '.././Helpers/If';

const styles = {
    title: {
        color: 'blue',
        textAlign: 'center',
        padding: '0.75em',
        border: '1px solid blue',
    },
};

class BookCardListByShelf extends React.Component {
    state = { wantToRead: [], read: [], currentlyReading: [] };

    /**
     * It gets a list of all books that has a specific shelf,
     * loops through it and split into three different
     * lists (wantToRead, read and currentlyReading).
     * Then it stores all three lists in this.state
     * @returns {Promise} - All async functions returns a promise
     */
    getBooksAndSplitByShelf = async () => {
        const books = await getAll();

        let wantToRead = [],
            read = [],
            currentlyReading = [];
        books.forEach(elem => {
            const { title, authors, id, imageLinks, shelf } = elem;
            const book = {
                title,
                authors,
                id,
                imageUrl: imageLinks.thumbnail,
                book: elem,
                shelf,
            };
            switch (elem.shelf) {
                case 'wantToRead':
                    wantToRead.push(book);
                    break;

                case 'currentlyReading':
                    currentlyReading.push(book);
                    break;

                case 'read':
                    read.push(book);
                    break;

                default:
                    break;
            }
        });

        this.setState({ wantToRead, read, currentlyReading });
    };

    componentDidMount() {
        this.getBooksAndSplitByShelf();
    }

    render() {
        const { read, currentlyReading, wantToRead } = this.state;
        return (
            <React.Fragment>
                <If condition={wantToRead.length > 0}>
                    <h1 style={styles.title}>Want to Read</h1>
                    <BookCardList
                        updateShelf={this.getBooksAndSplitByShelf}
                        books={wantToRead}
                    />
                </If>
                <If condition={currentlyReading.length > 0}>
                    <h1 style={styles.title}>Currently Reading</h1>
                    <BookCardList
                        updateShelf={this.getBooksAndSplitByShelf}
                        books={currentlyReading}
                    />
                </If>
                <If condition={read.length > 0}>
                    <h1 style={styles.title}>Read</h1>
                    <BookCardList
                        updateShelf={this.getBooksAndSplitByShelf}
                        books={read}
                    />
                </If>
            </React.Fragment>
        );
    }
}

export default BookCardListByShelf;
