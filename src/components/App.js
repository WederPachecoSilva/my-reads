import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import Loading from './helpers/Loading';

const LoadableHome = Loadable({
    loader: () => import('./Home'),
    // @ts-ignore
    loading: () => <Loading />,
});

const LoadableSearch = Loadable({
    loader: () => import('./Search'),
    // @ts-ignore
    loading: () => <Loading />,
});

const App = () => (
    <div>
        <Router>
            <div>
                <Route exact path="/" component={LoadableHome} />
                <Route path="/search" component={LoadableSearch} />
            </div>
        </Router>
    </div>
);

export default App;
