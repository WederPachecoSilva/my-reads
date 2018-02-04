import React from 'react';

const style = {
    container: {
        margin: 0,
        padding: 20,
        textAlign: 'center',
    },
};

/**
 *  This component will render with the user tries to search for
 *  an URL that doesn't match any valid one.
 *  This is a simple 404 handler.
 *  In case of production it needs to get a better looking
 */
const NotMatch = () => (
    <div style={style.container}>
        <p>Something went wrong!</p>
        <p>It seems like this doesn't exist</p>
        <p>Please check if the URL is correct</p>
    </div>
);

export default NotMatch;
