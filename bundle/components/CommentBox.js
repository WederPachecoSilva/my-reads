import * as React from "react";
import { Paper, withStyles, Input, FormControl, Button } from "material-ui";
const styles = {
    container: {
        display: "flex"
    },
    input: {}
};
class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        };
        this.onChangeInput.bind(this);
        this.saveComment.bind(this);
    }
    saveComment(e) {
        e.preventDefault();
        localStorage.setItem(this.props.title, e.currentTarget.value);
    }
    onChangeInput(e) {
        this.setState({ inputValue: e.currentTarget.value });
    }
    render() {
        const { container, input } = this.props.classes;
        return (React.createElement(Paper, Object.assign({}, this.props, { className: container }),
            React.createElement(FormControl, null,
                React.createElement(Input, { className: input, onChange: this.onChangeInput, multiline: true, fullWidth: true }),
                React.createElement(Button, { onClick: this.saveComment, raised: true, color: "primary" }, "Send Comment"))));
    }
}
/*
    To wrap custom components in order to enhance material-ui
    components, two steps needs to be made to improve performance:
    1- Forward the properties(line 37).
    2- Tag the custom component with a muiName static property passing
    the type of material-ui component inside it.
    https://material-ui-next.com/guides/composition/
*/
CommentBox.muiName = "Paper";
export default withStyles(styles)(CommentBox);
/*
    Falta ver como usar o localStorage
*/
//# sourceMappingURL=CommentBox.js.map