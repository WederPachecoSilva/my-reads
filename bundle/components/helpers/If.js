import * as React from 'react';
const If = (props) => {
    const { condition, children } = props;
    if (condition === true) {
        return (React.createElement("div", null, children));
    }
    else {
        return null;
    }
};
export default If;
//# sourceMappingURL=If.js.map