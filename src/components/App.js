import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Search from './Search';

/*
  Router goes inside App because it doesn't break the unit test 
  when trying to render App component. This way the test will 
  try to render the entire App at once. This test is under 
  "src/__tests__/App.js" file.
*/
const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
    </div>    
  </Router>
);
  
export default App;
