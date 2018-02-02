import React from 'react';
import Error from './Error';

/*
    Simple error boundary component for catching errors covered
    by error bounderies life cycle.
    In case of production it needs to get a better looking Error component
*/
class ErrorBoundary extends React.Component {
    state = { hasError: false };

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <Error />;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
