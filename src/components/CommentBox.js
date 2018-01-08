import * as React from 'react';
import { Paper, withStyles, Input, FormControl, Button } from 'material-ui';

const styles = {
    container: {
        display: 'flex'
    },
    input: {
        // Completar
    }
};

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
        this.onChangeInput.bind(this);
        this.saveComment.bind(this);
    }

    /*
        To wrap custom components in order to enhance material-ui
        components, two steps needs to be made to improve performance:
        1- Forward the properties(line 37).
        2- Tag the custom component with a muiName static property passing
        the type of material-ui component inside it.   
        https://material-ui-next.com/guides/composition/
    */
    static muiName = 'Paper';

    saveComment(e) {
        e.preventDefault();
        // @ts-ignore
        localStorage.setItem(this.props.title, e.currentTarget.value);
    }

    onChangeInput(e) {
        this.setState({ inputValue: e.currentTarget.value });
    }

    render() {
        // @ts-ignore
        const { container, input } = this.props.classes;
        return (
            <Paper {...this.props} className={container}>
                <FormControl>
                    <Input
                        className={input}
                        onChange={this.onChangeInput}
                        multiline={true}
                        fullWidth={true}
                    />
                    <Button onClick={this.saveComment} raised color="primary">
                        Send Comment
                    </Button>
                </FormControl>
            </Paper>
        );
    }
}

export default withStyles(styles)(CommentBox);

/*
    Falta ver como usar o localStorage
*/
