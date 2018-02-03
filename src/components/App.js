import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Loading from './helpers/Loading';
import Header from './Header/Header';

const LoadableHome = Loadable({
    loader: () => import('./Routes/HomeWithErrorBoundary'),
    // @ts-ignore
    loading: () => <Loading />,
});

const LoadableSearch = Loadable({
    loader: () => import('./Routes/SearchWithErrorBoundary'),
    // @ts-ignore
    loading: () => <Loading />,
});

const App = () => (
    <Router>
        <React.Fragment>
            <Header />
            <Switch>
                <Route exact path="/" component={LoadableHome} />
                <Route path="/search" component={LoadableSearch} />
            </Switch>
        </React.Fragment>
    </Router>
);

export default App;
