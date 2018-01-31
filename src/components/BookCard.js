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
import { ArrowDropDownCircle } from 'material-ui-icons';
import ChangeDrawerModal from './ChangeDrawerModal';

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

    render() {
        // @ts-ignore
        const { classes, imageUrl, title, authors } = this.props;

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
                            onClick={() => {
                                this.setState({ enableComment: true });
                            }}
                            dense
                            color="primary"
                        >
                            Create comment
                        </Button>
                        <Button dense color="primary" onClick={this.openModal}>
                            Select a Group
                            <ArrowDropDownCircle
                                className={classes.arrowIcon}
                            />
                        </Button>
                        <ChangeDrawerModal
                            isOpen={this.state.isModalOpen}
                            closeModal={this.closeModal}
                        />
                    </CardActions>
                </Card>
            </div>
        );
    }
}

// @ts-ignore
export default withStyles(styles)(BookCard);
