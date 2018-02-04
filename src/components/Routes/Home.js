import React from 'react';

import BookCardListByShelf from '../BookCardListByShelf';
import withErrorBoundary from '../ErrorHandling/withErrorBoundary';

const Home = () => <BookCardListByShelf />;

export default withErrorBoundary(Home);
