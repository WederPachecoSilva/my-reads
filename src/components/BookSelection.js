import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

class RadioButtonsGroup extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    state = {
        value: '',
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        // @ts-ignore
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <FormControl
                    component="fieldset"
                    className={classes.formControl}
                >
                    <FormLabel component="legend">Select Drawer</FormLabel>
                    <RadioGroup
                        aria-label="drawer"
                        name="drawer"
                        className={classes.group}
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel
                            value="want"
                            control={<Radio />}
                            label="Want to Read"
                        />
                        <FormControlLabel
                            value="reading"
                            control={<Radio />}
                            label="Currently Reading"
                        />
                        <FormControlLabel
                            value="read"
                            control={<Radio />}
                            label="Read"
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        );
    }
}

// @ts-ignore
export default withStyles(styles)(RadioButtonsGroup);
