import React from 'react';
import Search from './Search';
import ErrorBoundary from '../ErrorHandling/ErrorBoundary';

const SearchWithErrorBoundary = () => (
    <ErrorBoundary>
        <Search />
    </ErrorBoundary>
);

export default SearchWithErrorBoundary;
