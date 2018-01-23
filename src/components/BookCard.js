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

const styles = {
    card: {
        maxWidth: 370,
    },
    media: {
        height: 400,
    },
    container: {
        margin: 10,
    },
};

class BookCard extends React.Component {
    state = { enableComment: false };

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
                                console.log(authors);
                            }}
                            dense
                            color="primary"
                        >
                            Create comment
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

// @ts-ignore
export default withStyles(styles)(BookCard);

/*
            Falta completar o componente
            */
