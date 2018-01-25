import * as React from 'react';
import { Paper, withStyles, Input, FormControl, Button } from 'material-ui';

const styles = {
    container: {
        display: 'flex',
    },
    input: {
        // Completar
    },
};

class CommentBox extends React.Component {
    state = {
        inputValue: '',
    };

    saveComment = e => {
        e.preventDefault();
        // @ts-ignore
        localStorage.setItem(this.props.title, e.currentTarget.value);
    };

    onInputChange = e => {
        this.setState({ inputValue: e.currentTarget.value });
    };

    render() {
        // @ts-ignore
        const { container, input } = this.props.classes;
        return (
            <Paper {...this.props} className={container}>
                <FormControl>
                    <Input
                        className={input}
                        onChange={this.onInputChange}
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

// @ts-ignore
export default withStyles(styles)(CommentBox);

/*
    Falta ver como usar o localStorage
*/
