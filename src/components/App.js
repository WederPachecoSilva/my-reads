import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Header from './Header';

const LoadableHome = Loadable({
    loader: () => import('./Home'),
    loading: () => <div>Loading...</div>,
});

const LoadableSearch = Loadable({
    loader: () => import('./Search'),
    loading: () => <div>Loading...</div>,
});

const App = () => (
    <div>
        <Header />
        <Router>
            <div>
                <Route exact path="/" component={LoadableHome} />
                <Route path="/search" component={LoadableSearch} />
            </div>
        </Router>
    </div>
);

export default App;
