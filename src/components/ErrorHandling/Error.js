/**
 *  Simple error component for catching error not covered
 *  by error bounderies life cycle.
 *  In case of production it needs to get a better looking
 */

import React from 'react';

const style = {
    container: {
        margin: 0,
        padding: 20,
        textAlign: 'center',
    },
};

const Error = () => (
    <div style={style.container}>
        <p>Something went wrong!</p>
        <p>Please try it later again</p>
    </div>
);

export default Error;
