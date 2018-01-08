import * as React from 'react';

const If = props => {
    const { condition, children } = props;
    if (condition === true) {
        return <div>{children}</div>;
    } else {
        return null;
    }
};

export default If;
