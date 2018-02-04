import * as React from 'react';
import PropTypes from 'prop-types';

const If = props => {
    const { condition, children } = props;
    if (condition) {
        return <React.Fragment>{children}</React.Fragment>;
    } else {
        return null;
    }
};

If.propTypes = {
    condition: PropTypes.any.isRequired,
    children: PropTypes.node.isRequired,
};

export default If;
