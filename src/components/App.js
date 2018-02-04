import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Loading from './Helpers/Loading';
import Header from './Header/Header';

const LoadableHome = Loadable({
    loader: () => import('./Routes/Home'),
    // @ts-ignore
    loading: () => <Loading />,
});

const LoadableSearch = Loadable({
    loader: () => import('./Routes/Search'),
    // @ts-ignore
    loading: () => <Loading />,
});

const LoadableNotMatch = Loadable({
    loader: () => import('./Routes/NotMatch'),
    // @ts-ignore
    loading: () => <Loading />,
});

/**
 * Loadable from react-loadable module is being used to
 * get code splitting, which is a tecnique used to avoid
 * that the user needs to import all the app at once.
 * Using code splitting the user only downloads the code
 * as it is demanded.
 */

const App = () => (
    <Router>
        <React.Fragment>
            <Header />
            <Switch>
                <Route exact path="/" component={LoadableHome} />
                <Route path="/search" component={LoadableSearch} />
                <Route component={LoadableNotMatch} />
            </Switch>
        </React.Fragment>
    </Router>
);

export default App;
