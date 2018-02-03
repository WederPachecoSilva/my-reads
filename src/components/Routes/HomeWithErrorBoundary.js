import React from 'react';
import Home from './Home';
import ErrorBoundary from '../ErrorHandling/ErrorBoundary';

const HomeWithErrorBoundary = () => (
    <ErrorBoundary>
        <Home />
    </ErrorBoundary>
);

export default HomeWithErrorBoundary;
