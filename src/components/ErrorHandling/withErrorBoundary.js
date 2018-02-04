import React from 'react';

import Error from './Error';

/**
 * This is a Higher Order Component that receives a react component
 * and returns basically the same component plus error boundary check.
 * It there is an error when mounting <Error /> component will render
 * instead of the component received.
 * @param {*} Component - Any react component
 */
const withErrorBoundary = Component => {
    return class ErrorBoundary extends React.Component {
        state = { hasError: false };

        componentDidCatch(error, info) {
            this.setState({ hasError: true });
        }

        render() {
            if (this.state.hasError) {
                return <Error />;
            }
            return <Component {...this.props} />;
        }
    };
};

export default withErrorBoundary;
