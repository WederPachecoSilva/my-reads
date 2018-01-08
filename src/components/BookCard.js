import * as React from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    withStyles,
    CardActions,
    Button
} from 'material-ui';

import If from './helpers/If';
import CommentBox from './CommentBox';

const styles = {
    card: {
        maxWidth: 345
    },
    media: {
        height: 200
    }
};

class BookCard extends React.Component {
    state = { enableComment: false };

    render() {
        const {
            classes,
            imageUrl,
            title,
            author,
            status,
            description
        } = this.props;
        return (
            <div>
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
                        <Typography component="p">{description}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            onClick={() =>
                                this.setState({ enableComment: true })
                            }
                            dense
                            color="primary"
                        >
                            Create comment
                        </Button>
                    </CardActions>
                    <If condition={localStorage.getItem(title)}>
                        <CardContent>
                            <CommentBox title={title} />
                        </CardContent>
                    </If>
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
