import * as React from 'react';

const If = props => {
    const { condition, children } = props;
    if (condition) {
        return <React.Fragment>{children}</React.Fragment>;
    } else {
        return null;
    }
};

export default If;
