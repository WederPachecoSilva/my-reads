import React from 'react';
import Search from '../Search';
import ErrorBoundary from '../ErrorHandling/ErrorBoundary';

const HomeWithErrorBoundary = () => (
    <ErrorBoundary>
        <Search />
    </ErrorBoundary>
);

export default HomeWithErrorBoundary;
