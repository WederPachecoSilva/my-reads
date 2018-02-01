import React from 'react';
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

const radioOptions = [
    { label: 'None', value: 'none' },
    { label: 'Want to Read', value: 'want' },
    { label: 'Currently Reading', value: 'reading' },
    { label: 'Read', value: 'read' },
];

const RadioButtonsGroup = props => {
    const { classes, changeSelectedDrawer, drawer } = props;

    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Select Drawer</FormLabel>
                <RadioGroup
                    aria-label="drawer"
                    name="drawer"
                    className={classes.group}
                    value={drawer}
                    onChange={changeSelectedDrawer}
                >
                    {radioOptions.map((option, key) => (
                        <FormControlLabel
                            control={<Radio />}
                            key={key}
                            {...option}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </div>
    );
};

// @ts-ignore
export default withStyles(styles)(RadioButtonsGroup);
