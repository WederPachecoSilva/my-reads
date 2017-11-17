import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography';
import Card, { CardAction, CardContent, CardMedia } from 'material-ui/Card';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import IconButton from 'material-ui/IconButton';

import If from './helpers/If';

const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 200,
    },
  };

const BookCard = ({ classes, imageUrl, title, author, status, description }) => {
    return (
        <div>
            <Card className={classes.card}>
                <CardMedia 
                    className={classes.media}
                    image={imageUrl}
                    title={title}
                />
                <Typography type='headline' component='h2'>
                    { title }
                </Typography>
                <Typography component='p'>
                    { description }
                </Typography>
                <CardAction>
                    <Button onClick={} dense color="primary">
                        Create comment
                    </Button>
                </CardAction>
                <If condition={localStorage.getItem()}>
                </If>
            </Card>
        </div>
    );
}

export default withStyles(styles)(BookCard);

/*
    Falta completar o component
*/

