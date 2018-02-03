import React from 'react';
import {
    withStyles,
    FormLabel,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
} from 'material-ui';

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
    { label: 'Want to Read', value: 'wantToRead' },
    { label: 'Currently Reading', value: 'currentlyReading' },
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
