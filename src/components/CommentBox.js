import React from 'react';
import { Paper } from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Input, { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';

const styles = {
    container: {
        display: 'flex'
    }
}


class CommentBox extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: ''
        }
        this.onChangeInput.bind(this);
        this.saveComment.bind(this);
    }

    saveComment(e) {
        e.preventDefault();
        localStorage.setItem()
    }

    onChangeInput(e) {
        this.setState({ inputValue: e.target.value });
    }

    render() {
        const { container, input } = this.props.classes;
        return (
            <Paper {...this.props} className={container} >
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
        )
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
CommentBox.muiName = 'Paper';

CommentBox.PropTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CommentBox);

/*
    Falta ver como usar o localStorage
*/