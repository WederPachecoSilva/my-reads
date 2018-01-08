import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";

const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
        </div>
    </Router>
);

export default App;
