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
import ChangeShelfModal from './ChangeShelfModal/ChangeShelfModal';

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
};

class BookCard extends React.Component {
    state = {
        enableComment: false,
        isModalOpen: false,
    };

    closeModal = () => {
        this.setState({ isModalOpen: false });
    };

    openModal = () => {
        this.setState({ isModalOpen: true });
    };

    openComment = () => {
        this.setState({ enableComment: true });
    };

    render() {
        // @ts-ignore
        const {
            classes,
            imageUrl,
            title,
            authors,
            book,
            updateShelf,
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
                        <Typography type="headline" component="h2">
                            {title}
                        </Typography>
                        {authors &&
                            authors.map((author, key) => (
                                <Typography key={key} component="p">
                                    {author}
                                </Typography>
                            ))}
                    </CardContent>
                    <CardActions>
                        <Button
                            onClick={this.openComment}
                            dense
                            color="primary"
                        >
                            Create comment
                        </Button>
                        <Button dense color="primary" onClick={this.openModal}>
                            Select a Shelf
                        </Button>
                        <ChangeShelfModal
                            isOpen={this.state.isModalOpen}
                            closeModal={this.closeModal}
                            book={book}
                            updateShelf={updateShelf}
                        />
                    </CardActions>
                </Card>
            </div>
        );
    }
}

// @ts-ignore
export default withStyles(styles)(BookCard);
