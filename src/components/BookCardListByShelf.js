import React from 'react';
import { getAll } from '../utils/BooksAPI';
import BookCardList from './BookCardList';

class BookCardListByShelf extends React.Component {
    state = { wantToRead: [], read: [], currentlyReading: [] };

    // Big O(n)
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
        return (
            <div>
                <h3>read</h3>
                <BookCardList
                    updateShelf={this.getBooksAndSplitByShelf}
                    books={this.state.read}
                />
                <h3>currently reading</h3>
                <BookCardList
                    updateShelf={this.getBooksAndSplitByShelf}
                    books={this.state.currentlyReading}
                />

                <h3>want to read</h3>
                <BookCardList
                    updateShelf={this.getBooksAndSplitByShelf}
                    books={this.state.wantToRead}
                />
            </div>
        );
    }
}

export default BookCardListByShelf;
