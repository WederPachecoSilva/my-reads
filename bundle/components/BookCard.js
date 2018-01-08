import * as React from "react";
import { withStyles, Card, CardActions, CardContent, CardMedia, Button } from "material-ui";
import Typography from "material-ui/Typography";
import If from "./helpers/If";
import CommentBox from "./CommentBox";
const styles = {
    card: {
        maxWidth: 345
    },
    media: {
        height: 200
    }
};
class BookCard extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { enableComment: false };
    }
    render() {
        const { classes, imageUrl, title, author, status, description } = this.props;
        return (React.createElement("div", null,
            React.createElement(Card, { className: classes.card },
                React.createElement(CardMedia, { className: classes.media, image: imageUrl, title: title }),
                React.createElement(CardContent, null,
                    React.createElement(Typography, { type: "headline", component: "h2" }, title),
                    React.createElement(Typography, { component: "p" }, description)),
                React.createElement(CardActions, null,
                    React.createElement(Button, { onClick: () => this.setState({ enableComment: true }), dense: true, color: "primary" }, "Create comment")),
                React.createElement(If, { condition: localStorage.getItem(title) },
                    React.createElement(CardContent, null,
                        React.createElement(CommentBox, { title: title }))))));
    }
}
export default withStyles(styles)(BookCard);
/*
    Falta completar o componente
*/
//# sourceMappingURL=BookCard.js.map