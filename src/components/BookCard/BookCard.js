import * as React from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    withStyles,
    CardActions,
    Button,
} from 'material-ui';
import ChangeShelfModal from '.././ChangeShelfModal/ChangeShelfModal';
import StarRating from './StarRating';

const styles = {
    container: {
        margin: 30,
    },
    card: {
        maxWidth: 330,
    },
    media: {
        height: 400,
    },
    arrowIcon: {
        marginLeft: 4,
    },
    action: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
};

class BookCard extends React.Component {
    state = {
        isModalOpen: false,
        rating: 0,
    };

    closeModal = () => {
        this.setState({ isModalOpen: false });
    };

    openModal = () => {
        this.setState({ isModalOpen: true });
    };

    render() {
        const {
            classes,
            imageUrl,
            title,
            authors,
            book,
            updateShelf,
            id,
        } = this.props;

        return (
            <div className={classes.container}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={imageUrl}
                        title={title}
                    />
                    <CardContent>
                        <Typography
                            align="center"
                            type="headline"
                            component="h2"
                        >
                            {title}
                        </Typography>
                        {authors &&
                            authors.map((author, key) => (
                                <Typography
                                    align="center"
                                    key={key}
                                    component="p"
                                >
                                    {author}
                                </Typography>
                            ))}
                    </CardContent>
                    <CardActions className={classes.action}>
                        <StarRating id={id} />
                        <Button
                            raised
                            dense
                            color="primary"
                            onClick={this.openModal}
                        >
                            Choose Shelf
                        </Button>
                    </CardActions>
                </Card>
                <ChangeShelfModal
                    isOpen={this.state.isModalOpen}
                    closeModal={this.closeModal}
                    book={book}
                    updateShelf={updateShelf}
                />
            </div>
        );
    }
}

// @ts-ignore
export default withStyles(styles)(BookCard);