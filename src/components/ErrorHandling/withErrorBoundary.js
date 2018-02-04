import React from 'react';

import Error from './Error';

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
