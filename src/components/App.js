// @flow

import * as React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Search from './Search';

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/search" component={Search} />
  </div>
);
  
export default App;
